import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <Link to="/event">
            <button type="button" className="btn btn-primary m-3">Create</button>
        </Link>
    </div>
);

export default Home;