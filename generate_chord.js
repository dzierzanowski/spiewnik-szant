#!/usr/bin/env node
'use strict';

const { SVGuitarChord } = require('svguitar');
// import domino from 'domino';
const { createSVGWindow } = require('svgdom');
const { registerWindow } = require('@svgdotjs/svg.js');
const { saveSvgAsPng } = require('save-svg-as-png');

// var domimpl = domino.createDOMImplementation();
// var document = domimpl.createHTMLDocument();
// var window = domino.createWindow('<div id="chart"></div>');
// var document = window.document;
const window = createSVGWindow();
const document = window.document;
global.window = window;
global.document = document;

console.log(global);

const settings = {
    "style": "handdrawn",
    "strings": 6,
    "frets": 4,
    "nutSize": 0.65,
    "titleFontSize": 48,
    "color": "#000",
    "strokeWidth": 3,
    "fretSize": 1.6,
    "backgroundColor": "none",
    "fixedDiagramPosition": false,
    "tuning": ["E","A","D","G","h","e"]
}

const A7 = {
    "title": "A7",
    "position": 1,
    "fingers": [[4,2],[2,2],[6,"x"],[5,0],[3,0],[1,0]],
    "barres": []
}

// const chart = new SVGuitarChord(document.querySelector('#chart'));
const chartElement = document.documentElement;
// chartDiv.setAttribute('id', 'chart');
const chart = new SVGuitarChord(chartElement);
chart.chord(A7).configure(settings);

const svg = chart.innerHtml;

saveSvgAsPng(svg, 'test.png');

