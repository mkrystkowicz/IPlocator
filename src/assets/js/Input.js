const invalidInputStyles = [
  'shadow-inner',
  'placeholder-red-700',
  'text-red-700',
];

class Input {
  constructor(DOMElement) {
    this.input = DOMElement;
  }
  getValue() {
    return this.input.value;
  }
  setValue(newValue) {
    return (this.input.value = newValue);
  }
  validateInput() {
    const validInputPattern =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (validInputPattern.test(this.input.value)) {
      return true;
    } else {
      return false;
    }
  }
  indicateInvalidInput(state) {
    if (state) {
      this.input.classList.add(...invalidInputStyles);
    } else {
      this.input.classList.remove(...invalidInputStyles);
    }
  }
}

export default Input;
