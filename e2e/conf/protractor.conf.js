"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            'args': ['--incognito']
        }
    },
    specs: ["../pokedex/specs/**.spec.js"],
    baseUrl: 'http://pokedex-angular-example.herokuapp.com'
};
