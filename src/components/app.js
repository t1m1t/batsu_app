import React from 'react';
import Home from './home';
import Event from './events';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const App = () => (
    <Router>
        <div className="container">
            <div className="row">
                <Route path="/" component={Home}/>
                <Route path="/event" component={Event}/>
            </div>
        </div>
    </Router>
);

export default App;
