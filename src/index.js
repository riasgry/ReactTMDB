import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './style.css';
import './order.css'

const root = createRoot(document.getElementById('root'))
root.render(
    <App />
)
