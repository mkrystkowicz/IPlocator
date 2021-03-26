import DOMElements from './DOMElements';
import Input from './Input';
import getIPLocation from './getIPLocation';
import IPInfoValues from './IPInfoValues';
import Map from './Map';

window.addEventListener('DOMContentLoaded', () => {
  const map = new Map(57, 13);
  const IPInfo = new IPInfoValues();
  map.setMap();
  map.setTileLayer();

  DOMElements.btn.addEventListener('click', () => render(map, IPInfo));
  DOMElements.input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      return render(map, IPInfo);
    }
  });
});

function render(map, IPInfo) {
  const input = new Input(DOMElements.input);
  input.indicateInvalidInput(false);
  const ipAddress = input.getValue();
  const inputIsValid = input.validateInput();

  if (!inputIsValid) {
    input.indicateInvalidInput(true);
    return;
  }

  getIPLocation(ipAddress).then(async data => {
    const {
      location: { lat, lng, city, region, timezone },
      ip,
      isp,
    } = await data;

    IPInfo.setValues(ip, city, region, timezone, isp);
    IPInfo.getValues();

    map.setCoordinates(lat, lng);
    map.setCircle();
    input.setValue('');
  });
}
