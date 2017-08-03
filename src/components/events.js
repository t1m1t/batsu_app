import React, { Component } from 'react';
import axios from 'axios';

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
            },
            modalIsOpen: false
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
            },
            modalIsOpen: !this.state.modalIsOpen
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
    render() {
        const {eventForm} = this.state;
        return (
            <div className="event_modal container">
                <h1>Event</h1>
                <div className="modal-body">
                    <form>
                        <div className="form-group row">
                            <label>Name</label>
                            <input placeholder="name" name="name" value={eventForm.name}
                                   onChange={(e) => this.handleChange(e)} maxLength={25} type="text"
                                   className="form-control"/>
                        </div>
                        <div className="form-group row">
                            <label>People to Invite</label>
                            <input placeholder="invite people" name="invitee" value={eventForm.invitee}
                                   onChange={(e) => this.handleChange(e)} type="text" className="form-control"/>
                        </div>
                        <div className="form-group row">
                            <label>Time</label>
                            <input name="time" value={eventForm.time} onChange={(e) => this.handleChange(e)}
                                   type="time" className="form-control"/>
                        </div>
                        <div className="form-group row">
                            <label>Date</label>
                            <input placeholder="date" name="date" value={eventForm.date}
                                   onChange={(e) => this.handleChange(e)} type="date" className="form-control"/>
                        </div>
                        <div className="form-group row">
                            <label>Location</label>
                            <input placeholder="location" name="location" value={eventForm.location}
                                   onChange={(e) => this.handleChange(e)} type="text" className="form-control"/>
                        </div>
                        <div className="form-group row">
                            <label>Description</label>
                            <input placeholder="description" name="description" value={eventForm.description}
                                   maxLength={140} onChange={(e) => this.handleChange(e)} type="text"
                                   className="form-control"/>
                        </div>
                        <div className="form-group row">
                            <label>Punishment</label>
                            <select className="form-control">
                                <option value="1">punishment1</option>
                                <option value="2">punishment2</option>
                                <option value="3">punishment3</option>
                            </select>
                        </div>
                    </form>
                    <button type="button" className="btn btn-outline-danger mr-2" onClick={this.props.onCancel}>Cancel</button>
                    <button type="button" onClick={(e) => this.addEvent(e)} className="btn btn-outline-success">Confirm</button>
                </div>
            </div>
        )
    }
}

export default Events;