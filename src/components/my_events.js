import React, { Component } from 'react';
import axios from 'axios';
import CreatedEventsData from './list';
import InvitedEventsData from './list_two';
// import NavBar from './nav_bar';
import './app.css';


class MyEvents extends Component {
    constructor(props){
        super(props);
        this.Loaded = true;
        this.state = {
            createdEventsList: [{
                event_name: '123',
                creator_id:'',
                event_id:3,
                event_dateTime:'',
                attendee_status:''
            }],
            invitedEventsList: [{
                event_name:'asd',
                creator_id:'',
                event_id:4,
                event_dateTime:'',
                attendee_status:''
            }]
            //will change based on server database
        }
    }

    componentWillMount(){
        this.getData();
    }

    getData(){
        axios.get('http://localhost/Website/accountability_db/c5.17_accountability/php/getData.php?operation=eventlist&token='+document.cookie.split('=')[1]).then((resp) => {
            //will change based on server database
            console.log('this is the response:', resp);
            // this.Loaded = true;
            this.setState({
                createdEventsList: [{
                    event_name:'123',
                    creator_id:'',
                    event_id:3,
                    event_dateTime:'',
                    attendee_status:''
                }],
                invitedEventsList: [{
                    event_name:'asd',
                    creator_id:'',
                    event_id:4,
                    event_dateTime:'',
                    attendee_status:''
                }]
            })
        });
    }

    render(){
        if(this.Loaded === false) {
            return (
                <div> Loading....</div>
            )
        } else {
            return (
                <div>
                    {/* <NavBar /> */}
                    <h1 className="myEvents_title">My Events</h1>
                    <h3 className="myEvents_subtitle">All of Your Events in One Place!</h3>

                    <h4 className="events_box_title">My Created Events</h4>
                    <div className="my_created_events_box">
                        <CreatedEventsData className="list_info" createdEventsList={this.state.createdEventsList} />
                        {/* //will change based on server database */}
                    </div>
                    <h4 className="events_box_title">Other Created Events</h4>
                    <div className="other_created_events_box">
                        <InvitedEventsData className="list_info" invitedEventsList={this.state.invitedEventsList} />
                        {/* //will change based on server database */}
                    </div>
                </div>
            )
        }  
    }
}

export default MyEvents;