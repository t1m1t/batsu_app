import React, { Component } from 'react';
import axios from 'axios';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'


class Events extends Component {
    constructor(props){
        super(props);

        this.state = {
            form: {
                event_name: 'event nameu',
                invitee: '1, 2, 3, 4',
                time: '',
                date: '',
                location: 'test location',
                address: '',
                description: 'descriptionnnnn',
                punishment: 'profile_doodle'
            }
        };
        this.onChange = (address) => this.setState({address})
    }

    handleChange(event){
        const {name, value} = event.target;
        const {form}  = this.state;
        form[name] = value;
        this.setState({form: {...form}});
    }

    handleFormSubmit(event){
        event.preventDefault();
        console.log('Called handleFormSubmit', this.state.form);
        const newState = {
            form: {
                event_name: '',
                invitee: '',
                time: '',
                date: '',
                location: '',
                address: '',
                description: '',
                punishment: ''
            }
        };
        geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
        this.setState(newState);
        this.handleAxios();
    };

    handleAxios(){
        const {form} = this.state;
        axios.post(`http://localhost/Website/accountability_db/c5.17_accountability/form.php?operation=insertEvent`, form).then((resp) => {
            console.log('this is the response:', resp);
        });
    };

    render() {
        const inputProps = {
            value: this.state.address,
            onChange:this.onChange
        };
        const {event_name, invitee, time, date, location, description, punishment} = this.state.form;
        return (
            <div className="event_modal container">
                <h1>Event</h1>
                <div className="modal-body">
                    <form onSubmit={(event) => {this.handleFormSubmit(event)}}>
                        <div className="form-group row">
                            <label>Event Name</label>
                            <input placeholder="name" name="name" value={event_name}
                                   onChange={(event) => this.handleChange(event)} maxLength={25} type="text" className="form-control"/>
                        </div>
                        <div className="form-group row">
                            <label>Invite Poeple</label>
                            <input placeholder="invite people" name="invitee" value={invitee}
                                   onChange={(event) => this.handleChange(event)} type="text" className="form-control"/>
                        </div>
                        <div className="form-group row">
                            <label>Time</label>
                            <input name="time" value={time} onChange={(event) => this.handleChange(event)}
                                   type="time" className="form-control"/>
                        </div>
                        <div className="form-group row">
                            <label>Date</label>
                            <input placeholder="date" name="date" value={date}
                                   onChange={(event) => this.handleChange(event)} type="date" className="form-control"/>
                        </div>
                        <div className="form-group row">
                            <label>Location</label>
                            <input placeholder="location" name="location" value={location}
                                   onChange={(event) => this.handleChange(event)} type="text" className="form-control"/>
                        </div>
                        <PlacesAutocomplete inputProps={inputProps} />
                        <div className="form-group row">
                            <label>description</label>
                            <input placeholder="description" name="description" value={description} maxLength={140} onChange={(e) => this.handleChange(e)} type="text" className="form-control"/>
                        </div>
                        <div className="form-group row">
                            <label>Punishment</label>
                            <select className="form-control" name="punishment" value={punishment} onChange={(e) => this.handleChange(e)}>
                                <option value="profile_doodle">Doodle on Profile Pic</option>
                                <option value="facebook_post">Facebook Post</option>
                                <option value="No Punishment">No Punishment</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-outline-success">Confirm</button>
                        <button type="button" className="btn btn-outline-danger mr-2" onClick={this.props.onCancel}>Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Events;