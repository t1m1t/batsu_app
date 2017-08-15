import React, { Component } from 'react';
import axios from 'axios';
import './app.css';


const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=hellotim123';
//url from backend

class CreatedEvent extends Component{
    constructor(props){
        super(props);

        this.state = {
            eventID: 30,
            list: {
                eventName: '',
                eventDateTime: '',
                eventinvitees: [{
                    isCreator: false,
                    fName: '',
                    lName: '',
                    account_ID: ''
                },{
                    isCreator: false,
                    fName: '',
                    lName: '',
                    account_ID: ''
                },],
                eventPunishment: "",
                eventAddress: "",
                eventDescription: "",
                eventLat: "",
                eventLong: ""
            }
        }
    }

    componentWillMount(){
        this.handleAxios();
    }

      handleCheckIn(event){
        event.preventDefault();
    }

    handleAxios(){
        axios.get('http://localhost/Website/accountability_db/c5.17_accountability/php/getData.php?operation=eventinfo&eventID='+this.state.eventID).then((resp) => {
            console.log('this is the response:', resp);
            this.setState({
                list: resp.data
            })
        });
    }

    countDown(){
        setTimeout(() => alert('timer is working'), this.list.eventDateTime)
    }

    render(){
        return (
            <form className="after_creating_event" onSubmit={(event) => this.handleCheckIn(event)}>
                {this.state.list.eventName}
                <h6>Time Until Event</h6>
                {this.state.list.eventDateTime}
                <div className="line_space"></div>
                <div>list of invitees</div>
                <div className="friends_picture_container">
                    {this.state.list.invitee}
                </div>
                <div className="line_space"></div>
                <div className="punishment_div">Punishment</div>
                <div>{this.state.list.punishment}</div>
                <button className="btn">Arrived</button>
            </form>
        )
    }
}

export default CreatedEvent;