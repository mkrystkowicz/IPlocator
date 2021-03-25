import DOMElements from './DOMElements';

class Input {
  constructor() {
    this.value = DOMElements.input.value;
  }
  getValue() {
    return this.value;
  }
  validateInput() {
    if (this.value.length < 3) {
      return;
    }
  }
}

export default Input;
