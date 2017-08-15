import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './home';
import Sign_Up from './sign_up';
import Profile from './profile';
import MyEvents from './my_events';
import WhatIsBatsu from './what_is_batsu';
import CreatedEvent from './preview_event';
import Map from './map';
import authUser from '../hoc/auth_user';

// const App = () => (
//     <div className="topbar-menu">
//         <Route exact path="/" component={Home} />
//         <Route path="/sign_up" component={authUser(Sign_Up)} />
//         <Route path="/profile" component={authUser(Profile)} />
//         <Route path="/my_events" component={authUser(MyEvents)} />
//         <Route path="/what_is_batsu" component={authUser(WhatIsBatsu)} />
//         <Route path="/preview_event" component={authUser(CreatedEvent)} />
//         <Route path="/map" component={authUser(Map)} /> 
//     </div>
// )

const App = () => (
    <div className="topbar-menu">
        <Route exact path="/" component={Home} />
        <Route path="/sign_up" component={Sign_Up} />
        <Route path="/profile" component={Profile} />
        <Route path="/my_events" component={MyEvents} />
        <Route path="/what_is_batsu" component={WhatIsBatsu} />
        <Route path="/preview_event" component={CreatedEvent} />
        <Route path="/map" component={Map} /> 
    </div>
)
export default App;