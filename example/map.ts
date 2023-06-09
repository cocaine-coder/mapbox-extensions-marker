import mapboxgl from 'mapbox-gl';
import 'mapbox-extensions';
import 'mapbox-extensions/dist/index.css'

import MarkerControl from '../lib/index';
import '../lib/index.css';

const lightStyle = 'mapbox://styles/mapbox/light-v11';
let currentStyle = lightStyle;

mapboxgl.accessToken = 'pk.eyJ1IjoiY29jYWluZWNvZGVyIiwiYSI6ImNrdHA1YjlleDBqYTEzMm85bTBrOWE0aXMifQ.J8k3R1QBqh3pyoZi_5Yx9w';

const map = new mapboxgl.Map({
    container: 'map',
    zoom: 10,
    center: [120.5, 31],
    pitch: 0,
    style: currentStyle
});

map.on('load', () => {

    map.loadImage("./marker.png", (err, img) => {
        if (err || !img) throw err;

        map.addImage("jas-custom-marker", img, { sdf: true });

        map.addControl(new MarkerControl("marker-container"))
    })
})

