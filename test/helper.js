const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = (new JSDOM('<!doctype html><html><body></body></html>')).window;

const fetch = require("node-fetch");

global.fetch = fetch;
global.document = dom.document;
global.window = dom.window;
global.navigator = {
userAgent: 'node.js'
};

// We will use for node when we do things with localStorage

// const LocalStorage = require('node-localstorage').LocalStorage;
// global.localStorage = new LocalStorage('localStorageTemp');
// global.sessionStorage = global.localStorage;
// global.window.sessionStorage = global.localStorage;
// global.window.localStorage = global.localStorage;
// global.Storage = global.localStorage;
//
// const sinon = require("sinon");
// global.XMLHttpRequest = sinon.useFakeXMLHttpRequest();
//
// global.Presentation = require("../dist/augmented-next-presentation.js");

const chai = require("chai");
global.chai = chai;
global.expect = chai.expect;
