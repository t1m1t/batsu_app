import React, { Component } from 'react';
import './app.css';
// import ListThree from './listThree';
import axios from 'axios';

class CreatedEvent extends Component{
    constructor(props){
        super(props);

        this.state = {
            form:{
                event_name:'',
                dateTime:'',
                invitee:'',
                punishment:''
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
                form:{
                    event_name:'',
                    dateTime:'',
                    invitee:'',
                    punishment:''
                }
                //this needs to be based from backend
            })
        });
    }

    handleCheckIn(event){
        event.preventDefault();
    }

    render(){
        return (
            <form className="after_creating_event" onSubmit={(event) => this.handleCheckIn(event)}>
                {/*<ListThree />*/}
                <div className="line_space"></div>
                <div>list of invitee</div>
                <div className="friends_picture_container">
                    <img src="http://www.tippanii.com/images/noprofile.png" alt=""/>
                    <img src="http://www.tippanii.com/images/noprofile.png" alt=""/>
                    <img src="http://www.tippanii.com/images/noprofile.png" alt=""/>
                    <img src="http://www.tippanii.com/images/noprofile.png" alt=""/>
                    <img src="http://www.tippanii.com/images/noprofile.png" alt=""/>
                    <img src="http://www.tippanii.com/images/noprofile.png" alt=""/>
                    <img src="http://www.tippanii.com/images/noprofile.png" alt=""/>
                    <img src="http://www.tippanii.com/images/noprofile.png" alt=""/>
                    <img src="http://www.tippanii.com/images/noprofile.png" alt=""/>
                    <img src="http://www.tippanii.com/images/noprofile.png" alt=""/>
                    <img src="http://www.tippanii.com/images/noprofile.png" alt=""/>
                    <img src="http://www.tippanii.com/images/noprofile.png" alt=""/>
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