import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import Store from './store';

ReactDOM.render(<Provider store={Store}><AppContainer /></Provider>, document.getElementById('root'));
registerServiceWorker();
