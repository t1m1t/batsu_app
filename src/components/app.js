import React from 'react';
import {BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from './home';
import Sign_Up from './sign_up';
import Event from './events';

const App = () => (
   <Router>
       <div className="topbar-menu">
           <Route exact path="/" component={Home} />
           <Route exact path="/sign_up" component={Sign_Up} />
           <Route exact path="/events" component={Event}/>
       </div>
   </Router >
)

export default App;
