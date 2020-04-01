export default class StepanError extends Error{
    constructor(message) {
        super();
        this.message = message;
        this.name = this.constructor.name;
    }
}
