import DOMElements from './DOMElements';

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
      this.ipInfoContainer.classList.toggle('opacity-5');
      this.ipInfoContainer.classList.toggle('pointer-events-none');
    } else {
      this.ipInfoContainer.classList.remove('opacity-5');
      this.ipInfoContainer.classList.remove('pointer-events-none');
    }
  }
}

export default IPInfoValues;
