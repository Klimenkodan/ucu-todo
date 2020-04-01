import Stepan from '/src/lib/stepan.js';

import {
  TodoListHead,
  TodoListToggleAll,
  TodoList
} from './components/todoList/index.js';

import { Footer } from './components/footer/index.js';

const todos = [
  {isDone: true, title: '(Done) Todo 1'},
  {isDone: true, title: '(Done) Todo 1'},
  {isDone: false, title: '(Done) Todo 2'}
];

class App extends Stepan.Component {
  render(todos =  []) {
    const rootElement = this.parent;
    const divContainer = Stepan.createElement('div', rootElement);

    // TodoListHead-----------------
    new TodoListHead(divContainer).render();

    // TodoListToggleAll-----------------
    const sectionMain = Stepan.createElement('section', divContainer, { class: 'main' });
    new TodoListToggleAll(sectionMain).render();

    // TodoList-----------------
    new TodoList(sectionMain).render(todos);

    // Footer-----------------
    new Footer(divContainer).render(todos);

    return rootElement
  }
}

function reactOnClick(event) {
  let par_el = event.target.parentNode.parentElement;
  let attribute_val = par_el.attributes.getNamedItem('class').value;
  par_el.removeAttribute('class');
  attribute_val = attribute_val === 'false' ? 'completed' : 'false';
  par_el.setAttribute('class', attribute_val);
}


new App(document.getElementById('todoapp')).render(todos);

for (let button of document.getElementsByClassName('toggle')) {
  button.addEventListener('click', (event) => reactOnClick(event));
}