import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './home';
import Sign_Up from './sign_up';
import Profile from './profile';
import MyEvents from './my_events';
import Map from './map';

const App = () => (
    <div className="topbar-menu">
        <Route exact path="/" component={Home} />
        <Route path="/sign_up" component={Sign_Up} />
        <Route path="/profile" component={Profile} />
        <Route path="/my_events" component={MyEvents} />
        <Route path="/map" component={Map} />
    </div>
)
export default App;