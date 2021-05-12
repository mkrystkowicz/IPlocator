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
  }
  setCircle() {
    return L.circle([this.latitude, this.longitude], {
      color: '#374151',
      fillColor: '#9CA3AF',
      fillOpacity: 0.4,
      radius: 750,
    }).addTo(this.map);
  }
  setMap() {
    this.map = L.map('map-container').setView(
      [this.latitude, this.longitude],
      4
    );

    this.setMapBounds();
  }
  setTileLayer() {
    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
      {
        attribution: false,
        minZoom: 3,
        maxZoom: 13,
        id: 'mapbox/dark-v10',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: process.env.LEAFLET_ACCESS_KEY,
      }
    ).addTo(this.map);
  }
  setMapBounds() {
    const southWest = L.latLng(-90, 180);
    const northEast = L.latLng(90, -180);
    let bounds = L.latLngBounds(southWest, northEast);

    this.map.setMaxBounds(bounds);
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
