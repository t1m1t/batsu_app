import React from 'react';
import {BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './home';
import Sign_Up from './sign_up';
import Maps from './logged_in_home';
import Profile from './profile';

const App = () => (
    <Router>
        <div className="topbar-menu">
            <Link className="topbar-links" to="/">Home</Link>
            <Link className="topbar-links" to="/sign_up">Sign Up</Link>
            <Link className="topbar-links" to="/maps">Maps</Link>
            <Link className="topbar-links" to="/profile">Profile</Link>
            <Route exact path="/" component={Home} />
            <Route exact path="/sign_up" component={Sign_Up} />
            <Route exact path="/maps" component={Maps}/>
            <Route path="/profile" component={Profile}/>
        </div>
    </Router >
);
export default App;