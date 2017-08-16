import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import SignUp from './sign_up';
import Profile from './profile';
import MyEvents from './my_events';
import WhatIsBatsu from './what_is_batsu';
import CreatedEvent from './preview_event';
import Map from './map';
import NavBar from './nav_bar';
// import authUser from '../hoc/auth_user';

const App = () => (
    <div className="topbar-menu">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/sign_up" component={SignUp} />
        <Route path="/profile" component={Profile} />
        <Route path="/my_events" component={MyEvents} />
        <Route path="/what_is_batsu" component={WhatIsBatsu} />
        <Route path="/preview_event" component={CreatedEvent} />
        <Route path="/map" component={Map} /> 
    </div>
)

export default App;