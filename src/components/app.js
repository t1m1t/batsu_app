import React from 'react';
import {BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './home';
import Sign_Up from "./sign_up";


const App = () => (
   <Router>
       <div className="topbar-menu">
           <Link className="topbar-links" to="/">Home</Link>
           <Link className="topbar-links" to="/sign_up">Sign Up</Link>

           <Route exact path="/" component={Home} />
           <Route exact path="/sign_up" component={Sign_Up} />
       </div>
   </Router >
)

export default App;
