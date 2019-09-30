const mapboxgl = require("mapbox-gl");



mapboxgl.accessToken = 'pk.eyJ1IjoicGF3ZWwzIiwiYSI6ImNrMTZsOG55dTE2Yjcza3BrcDBwZGE2YmwifQ.9t0-DCmw8tlL15Lk3TVAuQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'
});