import React from 'react';
import Home from './home';
import Events from './events';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const App = () => (
    <div className="container">
        <div className="row">
            <Route path="/" component={Home}/>
            <Route path="/events" component={Events}/>
        </div>
    </div>
);

export default App;
