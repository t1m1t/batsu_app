import React, { Component } from 'react';
import ListThree from './listThree';
import axios from 'axios';
import './app.css';


const BASE_URL = 'http://api.reactprototypes.com';
//url from backend

class CreatedEvent extends Component{
    constructor(props){
        super(props);

        this.state = {
            list: {
                event_name: '',
                event_creator: '',
                dateTime: '',
                invitee: '',
                punishment: ''
            }
        }
    }
    

    componentWillMount(){
        this.handleAxios();
    }

    handleAxios(){
        axios.get(`${BASE_URL}`).then((resp) => {
            console.log('this is the response:', resp);
            this.setState({
                list: resp.data
                //this needs to be based from backend
            })
        });
    }

    handleCheckIn(e){
        e.preventDefault();
    }

    render(){
        return (
            <form className="after_creating_event" onSubmit={(e) => this.handleCheckIn(e)}>
                <ListThree list={this.state.list} />
                <div className="line_space"></div>
                <div>list of invitee</div>
                <div className="friends_picture_container">
                    <img className="bk_image" src="http://www.tippanii.com/images/noprofile.png" alt=""/>
                    <img className="bk_image" src="http://www.tippanii.com/images/noprofile.png" alt=""/>
                    <img className="bk_image" src="http://www.tippanii.com/images/noprofile.png" alt=""/>
                    <img className="bk_image" src="http://www.tippanii.com/images/noprofile.png" alt=""/>
                    <img className="bk_image" src="http://www.tippanii.com/images/noprofile.png" alt=""/>
                </div>
                <div className="line_space"></div>
                <div className="punishment_div">Punishment</div>
                <div>pushups 100 times</div>
                <button className="btn">Check-In</button>
            </form>
        )
    }
}

export default CreatedEvent;