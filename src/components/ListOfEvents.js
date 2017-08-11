import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListOfEvents extends Component {
    componentWillMount(){
        this.props /* some function that spits out data */
    }
    render(){
        const listElements = this.props.list.map((item, index) => {
            return (
                <li key={index} className="list-group-item">
                    <div className="">
                        <Link to={``}>{item.title}</Link>
                    </div>
                </li>
            )
        });
        return (
            <div>
                <h1>List of events</h1>
                <ul className="list-group">
                    { listElements }
                </ul>
            </div>
        )
    }
}

export default ListOfEvents;

