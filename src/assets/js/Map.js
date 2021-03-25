require('dotenv').config();
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';

class Map {
  constructor(lat, long) {
    this.map;
    this.latitude = lat;
    this.longitude = long;
  }
  setCoordinates(newLat, newLong) {
    this.latitude = newLat;
    this.longitude = newLong;
    return this.changeMapCords();
  }
  changeMapCords() {
    this.map.panTo([this.latitude, this.longitude]);

    return this.setCircle();
  }
  setCircle() {
    return L.circle([this.latitude, this.longitude], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.4,
      radius: 750,
    }).addTo(this.map);
  }
  setMap() {
    this.map = L.map('map-container').setView(
      [this.latitude, this.longitude],
      13
    );

    return this.setTileLayer();
  }
  setTileLayer() {
    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
      {
        attribution: false,
        maxZoom: 18,
        id: 'mapbox/dark-v10',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: process.env.LEAFLET_ACCESS_KEY,
      }
    ).addTo(this.map);
  }
}

//Map tiles fix
(function () {
  const originalInitTile = L.GridLayer.prototype._initTile;
  L.GridLayer.include({
    _initTile: function (tile) {
      originalInitTile.call(this, tile);

      const tileSize = this.getTileSize();

      tile.style.width = tileSize.x + 1 + 'px';
      tile.style.height = tileSize.y + 1 + 'px';
    },
  });
})();

export default Map;
