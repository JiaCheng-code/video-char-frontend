import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css/normalize.css';

import {Provider} from "react-redux/es/exports";
import store from './store/store';
import "./globe.scss"


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);
