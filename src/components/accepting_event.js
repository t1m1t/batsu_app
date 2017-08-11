import React, { Component } from 'react';

const style = {
    border: "1px solid black"
};


/*** this is going to be the modal after logging in ***/

class AcceptEvent extends Component {
    handleAccept(){

    }

    render(){
        return (
            <div style={style} className="container">
                <h1>Title goes here</h1>
                <h3>date goes here</h3>
                <h3>Time of the event</h3>
                <h5>location of the meeting place</h5>
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
                <div className="punishment_div">
                    <div>pushup 100times</div>
                </div>
                <button type="submit" className="btn btn-success" onClick={(e)=>this.handleAccept()}>Accept</button>
            </div>
        )
    }
}

export default AcceptEvent;