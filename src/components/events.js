import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Events extends Component {
    constructor(props){
        super(props);

        this.state = {
            eventForm: {
                name: '',
                invitee: '',
                time: '',
                date: '',
                location: '',
                description: '',
            }
        }
    }
    handleChange(e){
        console.log('event',e.target);
        const { value,name } = e.target;
        const { eventForm }  = this.state; //this changed from {form} to form
        eventForm[name] = value;

        this.setState({
            eventForm: {...eventForm}
        });
    }
    addEvent(e){
        e.preventDefault();
        const { eventForm } = this.state;
        console.log("Form submitted", eventForm);
        this.setState({ //resetting form to blank
            eventForm: {
                name: '',
                invitee: '',
                time: '',
                date: '',
                location: '',
                description: '',
            }
        });
        this.handleAxiosEvent();
    }
    handleAxiosEvent(){
        const {eventForm} = this.state;
        console.log("event form:",eventForm);
        axios.post(`http://localhost/Website/accountability_db/c5.17_accountability/form.php?operation=insertEvent`, eventForm).then((resp) => {
            console.log('this is the response of event from insert:', resp);
        })
    }
    render(){
        const { eventForm } = this.state;
        return (
        <div className="modal-body">
            <form>
                <div className="form-group row">
                    <label>Name</label>
                    <input placeholder="name" name="name" value={eventForm.name} onChange={(e) => this.handleChange(e)} maxLength={25} type="text" className="form-control"/>
                </div>
                <div className="form-group row">
                    <label>People to Invite</label>
                    <input placeholder="invite people" name="invitee" value={eventForm.invitee} onChange={(e) => this.handleChange(e)} type="text" className="form-control"/>
                </div>
                <div className="form-group row">
                    <label>Time</label>
                    <input name="time" value={eventForm.time} onChange={(e) => this.handleChange(e)} type="time" className="form-control"/>
                </div>
                <div className="form-group row">
                    <label>Date</label>
                    <input placeholder="date" name="date" value={eventForm.date} onChange={(e) => this.handleChange(e)} type="date" className="form-control"/>
                </div>
                <div className="form-group row">
                    <label>Location</label>
                    <input placeholder="location" name="location" value={eventForm.location} onChange={(e) => this.handleChange(e)} type="text" className="form-control"/>
                </div>
                <div className="form-group row">
                    <label>Description</label>
                    <input placeholder="description" name="description" value={eventForm.description} maxLength={140} onChange={(e) => this.handleChange(e)} type="text" className="form-control"/>
                </div>
            </form>
            <Link to="/"><button type="button" className="btn btn-outline-danger ml-2">Cancel</button></Link>
            <button type="button" onClick={(e) => this.addEvent(e)} className="btn btn-outline-success">Confirm</button>
        </div>
            // <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            //     <div className="event-modal-content">
            //         <div className="modal-dialog" role="document">
            //             <div className="modal-content">
            //                 <div className="modal-header">
            //                     <h5 className="modal-title" id="exampleModalLabel">Event Creation</h5>
            //                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            //                         <span aria-hidden="true">&times;</span>
            //                     </button>
            //                 </div>
            //
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default Events;