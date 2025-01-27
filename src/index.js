import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root
root.render(
    <React.StrictMode>
        <BrowserRouter> {/* Wrap App with BrowserRouter */}
            <App />
        </BrowserRouter>
    </React.StrictMode>
);