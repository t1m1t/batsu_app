import React, { Component } from 'react';
import axios from 'axios';
import './app.css';
import Timer from './timer';
import EventsListItems from './list_item';
import { connect } from 'react-redux';


class CreatedEvent extends Component{
    constructor(props){
        super(props);

        this.pageLoaded = false;
        this.state = {
            eventID: '',
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
        // const {id} = this.props.match.param;
        // console.log(id);
        // this.props.getDataEvents(id);
       this.getUrl(); 
       this.handleAxios();
       
    }

      handleCheckIn(event){
        event.preventDefault();
    }

    handleAxios(){
        console.log(this.state);
        axios.get('http://localhost/Website/accountability_db/c5.17_accountability/php/getData.php?operation=eventinfo&eventID='+this.state.eventID).then((resp) => {
            console.log('this is the response:', resp);
            this.pageLoaded = true;
            this.setState({
                list: resp.data
            })
            console.log("list: ", this.state.list);

        });
    }

    getUrl(){
        let url = location.pathname;
        let fields = url.split('/');
        let id = fields[2];
        this.setState({eventID:id});
    }

    countDown(){
        setTimeout(() => alert('timer is working'), this.list.eventDateTime)
    }

    render(){
        console.log(this.state);
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


{/*<button className="btn">Arrived</button>*/}