import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ClassStyleSample} from "./classStyleSample";
import {FunctionalStyleSample} from "./functionalStyleSample";
import * as serviceWorker from './serviceWorker';
import {AllowFunctionalStyleSample} from "./allowFunctionalStyleSample";

ReactDOM.render(
  <React.StrictMode>
      <ClassStyleSample plusNum={1} />
      <FunctionalStyleSample plusNum={2}/>
      <AllowFunctionalStyleSample plusNum={3}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
