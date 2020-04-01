import StepanError from '/src/components/error/stepanError.js';

export default class Stepan {
  static createElement(element, parent, attributes = {}) {
    if (document.createElement(element).toString() === "[object HTMLUnknownElement]") {
      throw new StepanError('this is not a valid tag name');
    }

    // TODO: check if this is a valid tag name
    const newElement = document.createElement(element);

    const { innerHTML, innerText } = attributes;

    for (let attribute in attributes) {
      if (['innerHTML', 'innerText'].includes(attribute)) {
        continue;
      }

      newElement.setAttribute(attribute, attributes[attribute]);
    }
    innerHTML && (newElement.innerHTML = innerHTML);
    innerText && (newElement.innerText = innerText);

    parent.appendChild(newElement);

    return newElement;
  }

  static Component = class {
    constructor(parent) {
      if (parent === undefined || parent === null || !(parent instanceof Element)){
          throw new StepanError('the parent name is invalid');
      }
      this.parent = parent;
    }

    // TODO (Bonus): Ensure that every component returns a top-level root element
  }
}