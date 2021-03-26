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
    const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (regex.test(this.input.value)) {
      return true;
    } else {
      return false;
    }
  }
  indicateInvalidInput(state) {
    if (state) {
      this.input.classList.add('shadow-inner');
      this.input.classList.add('placeholder-red-700');
      this.input.classList.add('text-red-700');
    } else {
      this.input.classList.remove('shadow-inner');
      this.input.classList.remove('placeholder-red-700');
      this.input.classList.remove('text-red-700');
    }
  }
}

export default Input;
