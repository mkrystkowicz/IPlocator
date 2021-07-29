require('dotenv').config();
import 'leaflet/dist/leaflet.css';
import { CIRCLE_OPTIONS, DEFAULT_MAP_OPTIONS } from './MapOptions';
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
    const bounds = L.latLng(this.latitude, this.longitude);

    this.map.flyTo(bounds, 11, {
      duration: 4,
      zoomOffset: 4,
    });
  }
  setCircle() {
    return L.circle([this.latitude, this.longitude], CIRCLE_OPTIONS).addTo(
      this.map
    );
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
      DEFAULT_MAP_OPTIONS
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
