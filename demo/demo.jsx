// Polyfils
// import 'core-js/es6/promise';
// import 'core-js/fn/promise';
import 'core-js/fn/array/filter';
import 'core-js/fn/array/find';
import 'core-js/fn/array/includes';
import 'core-js/fn/array/is-array';
import 'core-js/fn/array/some';
import 'core-js/fn/array/every';
import 'core-js/fn/object/assign';
import 'core-js/fn/object/keys';
import 'core-js/fn/object/values';
import 'core-js/fn/string/includes';
// import 'whatwg-fetch';
// import 'regenerator-runtime/runtime'; // For ES2017 await

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DemoApplication from './DemoApplication';

import './demo.scss';

ReactDOM.render(
    <MuiThemeProvider>
        <DemoApplication />
    </MuiThemeProvider>,
    document.querySelector('#container')
);
