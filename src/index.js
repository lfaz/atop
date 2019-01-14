import React from 'react';
import ReactDOM from 'react-dom';
import './app/assets/styles/index.scss';
import App from './app/components/Main/App';
import * as serviceWorker from './serviceWorker';
import './app/assets/styles/custom.scss';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
