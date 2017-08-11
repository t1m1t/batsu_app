import React, { Component } from 'react';
import './app.css';


/*** this is going to be the modal after logging in ***/

class AcceptEvent extends Component {
    constructor(props){
        super(props);

        this.state = {
            message:''
        }
    }
    handleMessageSubmit(e){
        e.preventDefault();
        const { message } = this.state;
        console.log("Form submitted", form);
        this.props.add({...form});

        this.setState({ //resetting form to blank
            form: {
                title: '',
                details: ''
            }
        });
    }
    handleMessageChange(e){
        console.log('event',e.target);
        const { value, name } = e.target;
        const {message}  = this.state; //this changed from {form} to form
        message[name] = value;

        this.setState({
            message: {...message}
        });

    }
    handleAccept(){

    }

    render(){
        const {message} = this.state;
        return (
            <div className="container">
                <h1>Title goes here</h1>
                <h3>date goes here</h3>
                <h3>Time of the event</h3>
                <h5>location of the meeting place</h5>
                <div className="punishment_div">
                    <h5><span>punishment: </span>pushup 100 times</h5>
                </div>
                <div>list of invitees</div>
                <div className="line_space"></div>
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
                <div className="msg_container">
                    <p><span>user1: </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p><span>user2: </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.2</p>
                    <p><span>user3: </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.3</p>
                    <p><span>user4: </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.2</p>
                    <p><span>user5: </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.2</p>
                    <p><span>user6: </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.2</p>
                    <p><span>user7: </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.2</p>
                    <p><span>user8: </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.2</p>
                    <p><span>user9: </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.2</p>
                    <p><span>user10: </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.2</p>
                    <p><span>user11: </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.2</p>
                    <p><span>user12: </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.2</p>
                    <p><span>user13: </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.2</p>

                </div>
                <form onSubmit={(e)=>this.handleMessageSubmit(e)} className="form">
                    <input onChange={(e)=>this.handleMessageChange(e)} value={message} placeholder="message here" type="text"/>
                    <button type="submit" className="btn btn-info">send</button>
                </form>
                <div className="bottom mt-5">
                    <button type="submit" className="btn btn-success" onClick={(e)=>this.handleAccept()}>Accept</button>
                </div>
            </div>
        )
    }
}

export default AcceptEvent;