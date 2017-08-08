import React, { Component } from 'react';
import axios from 'axios';

class Events extends Component {
    constructor(props){
        super(props);

        this.state = {
            form: {
                name: '',
                invitee: '',
                time: '',
                date: '',
                location: '',
                address: '',
                description: '',
                punishment: ''
            }
        }
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
                name: '',
                invitee: '',
                time: '',
                date: '',
                location: '',
                address: '',
                description: '',
                punishment: ''
            }
        };
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
        const {name, invitee, time, date, location, address, description, punishment} = this.state.form;
        return (
            <div className="event_modal container">
                <h1>Event</h1>
                <div className="modal-body">
                    <form onSubmit={(event) => {this.handleFormSubmit(event)}}>
                        <div className="form-group row">
                            <input placeholder="name" name="name" value={name}
                                   onChange={(event) => this.handleChange(event)} maxLength={25} type="text" className="form-control"/>
                        </div>
                        <div className="form-group row">
                            <input placeholder="invite people" name="invitee" value={invitee}
                                   onChange={(event) => this.handleChange(event)} type="text" className="form-control"/>
                        </div>
                        <div className="form-group row">
                            <input name="time" value={time} onChange={(event) => this.handleChange(event)}
                                   type="time" className="form-control"/>
                        </div>
                        <div className="form-group row">
                            <input placeholder="date" name="date" value={date}
                                   onChange={(event) => this.handleChange(event)} type="date" className="form-control"/>
                        </div>
                        <div className="form-group row">
                            <input placeholder="location" name="location" value={location}
                                   onChange={(event) => this.handleChange(event)} type="text" className="form-control"/>
                        </div>
                        <div className="form-group row">
                            <input placeholder="address" name="address" value={address}
                                   onChange={(event) => this.handleChange(event)} type="text" className="form-control"/>
                        </div>
                        <div className="form-group row">
                            <input placeholder="description" name="description" value={description}
                                   maxLength={140} onChange={(e) => this.handleChange(e)} type="text" className="form-control"/>
                        </div>
                        <div className="form-group row">
                            <label>Punishment</label>
                            <select className="form-control" name="punishment">
                                <option value="1">punishment1</option>
                                <option value="2">punishment2</option>
                                <option value="3">punishment3</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-outline-success">Confirm</button>
                        <button type="button" className="btn btn-outline-danger mr-2">Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Events;