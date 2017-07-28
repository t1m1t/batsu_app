import React, { Component } from 'react';

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
                description: ''
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

    addItem(e){
        e.preventDefault();
        const { eventForm } = this.state;
        console.log("Form submitted", eventForm);
        this.props.add({...eventForm});

        this.setState({ //resetting form to blank
            eventForm: {
                name: '',
                invitee: '',
                time: '',
                date: '',
                location: '',
                description: ''
            }
        });
    }
    render(){
        const { eventForm } = this.state;
        return (
            <div className="container">
                <form onSubmit={(e)=>this.addItem(e)}>
                    <div className="form-group row">
                        <label>Name</label>
                        <input placeholder="name" name="name" value={eventForm.name}  onChange={(e) => this.handleChange(e)} type="text" className="form-control"/>
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
                        <input placeholder="date" name="date" value={eventForm.date}  onChange={(e) => this.handleChange(e)} type="date" className="form-control"/>
                    </div>
                    <div className="form-group row">
                        <label>Location</label>
                        <input placeholder="location" name="location" value={eventForm.location} onChange={(e) => this.handleChange(e)} type="text" className="form-control"/>
                    </div>
                    <div className="form-group row">
                        <label>Description</label>
                        <input placeholder="description" name="description" value={eventForm.description} onChange={(e) => this.handleChange(e)} type="text" className="form-control"/>
                    </div>
                    <button className="btn btn-outline-success">Create Event</button>
                </form>
            </div>
        )
    }
}

export default Events;