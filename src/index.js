import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/nav_bar';


ReactDOM.render(
    <div>
        <NavBar />
        <Router>
            <App />
        </Router>
    </div>,
    document.getElementById('root')
);
