import React, { Component } from 'react';
import axios from 'axios';
import List from './list';
import './app.css';


// const BASE_URL = 'http://localhost/Website/accountability_db/c5.17_accountability/form.php?operation=insertEvent';
const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=hellotim123';

class MyEvents extends Component {
    constructor(props){
        super(props);

        this.state = {
            list: []
        }
    }

    componentWillMount(){
        this.getData();
    }

    getData(){
        axios.get(`${BASE_URL}/todos${API_KEY}`).then((resp) => {
            console.log('this is the response:', resp);
            this.setState({
                list: resp.data.todos
            })
        });
    };

    render(){
        return (
            <div>
                <h1 className="myEvents_title">My Events</h1>
                <h3 className="myEvents_subtitle">All of Your Events in One Place!</h3>

                <h4 className="events_box_title">My Created Events</h4>
                <div className="my_created_events_box"> 
                    <List className="list_info" list={this.state.list} />
                </div> 
                <h4 className="events_box_title">Other Created Events</h4>
                <div className="other_created_events_box">
                    <List className="list_info" list={this.state.list} />
                </div>
            </div>
        )
    }
}

export default MyEvents;