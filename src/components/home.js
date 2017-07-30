import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
    <div>
        <Link to="/events">Event creation</Link>
        <Link to="/">Back</Link>
    </div>
)

export default Home;