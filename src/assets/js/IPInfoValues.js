import DOMElements from './DOMElements';

class IPInfoValues {
  constructor() {
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
}

export default IPInfoValues;
