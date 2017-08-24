import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

import './style.css';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
