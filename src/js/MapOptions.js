export const DEFAULT_MAP_OPTIONS = {
  attribution: false,
  minZoom: 3,
  maxZoom: 13,
  id: 'mapbox/dark-v10',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: process.env.LEAFLET_ACCESS_KEY,
};

export const CIRCLE_OPTIONS = {
  color: '#262626',
  fillColor: '#D4D4D4',
  fillOpacity: 0.4,
  radius: 750,
};
