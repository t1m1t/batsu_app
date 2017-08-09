import React, { Component } from 'react';

const msgStyle = {
    marginTop: "4em",
}

class CreatedEvent extends Component{

    handleCheckIn(e){
        e.preventDefault();
    }
    render(){
        return (
            <form className="after_creating_event" onSubmit={(e) => this.handleCheckIn(e)}>
                <h1>Gym time</h1>
                <h3>Time Left</h3>
                <div className="msg_container" style={msgStyle}>
                    <p>I'm going to be late</p>
                    <p>punishment will be upon you</p>
                    <p>no I won't take the punishment</p>
                    <p>fine we are not friends anymore</p>
                </div>
                <div>
                    </div>
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
                <div className="punishment_div">
                    Punishment
                    <span>: pushups 100 times</span>
                </div>
                <button className="btn">Check-In</button>
            </form>
        )
    }
}

export default CreatedEvent;