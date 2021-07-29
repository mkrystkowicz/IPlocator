import DOMElements from './DOMElements';

const collapsedContainerClasses = ['opacity-5', 'pointer-events-none'];

class IPInfoValues {
  constructor(DOMElement) {
    this.ipInfoContainer = DOMElement;
    this.IPAdress = null;
    this.location = null;
    this.timezone = null;
    this.isp = null;
  }
  getValues() {
    DOMElements.ipAddressLabel.innerText = this.IPAdress;
    DOMElements.ipLocationLabel.innerText = this.location;
    DOMElements.ipTimezoneLabel.innerText = this.timezone;
    DOMElements.ipISPLabel.innerText = this.isp;
  }
  setValues(ip, city, region, timezone, isp) {
    this.IPAdress = ip;
    this.location = city + ', ' + region;
    this.timezone = timezone;
    this.isp = isp;
  }
  collapseContainer(state) {
    if (state) {
      collapsedContainerClasses.forEach(item =>
        this.ipInfoContainer.classList.toggle(item)
      );
    } else {
      this.ipInfoContainer.classList.remove(...collapsedContainerClasses);
    }
  }
}

export default IPInfoValues;
