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
}

export default Input;
