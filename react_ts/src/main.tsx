/// <reference path="../typings/react/react.d.ts"/>
/// <reference path="../typings/react/react-dom.d.ts"/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Todos from './component';

// Instantiate the React component in the div#main element
ReactDOM.render( <Todos/> , document.getElementById('main') );


