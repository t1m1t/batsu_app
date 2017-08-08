import React, { Component } from 'react';

const profileStyle = {
    height: "18em"
};
const imgStyle ={
    height: "18em"
};

class Profile extends Component {
    componentWillMount() {

    }

    handleEdit(id) {

    }

    render() {
        return (
            <div>
                <h1 className="card-title">Profile</h1>
                <div className="card" style={profileStyle}>
                    <img className="card-img-top" style={imgStyle} src="http://www.tippanii.com/images/noprofile.png" alt="./imgs/example_profile.png"/>
                    <div className="card-block">
                        <ul className="list-group list-group-flush container">
                            <li className="list-group-item">mail@mail.com</li>
                            <li className="list-group-item">LastN FirstN</li>
                            <li className="list-group-item">123-123-1234</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        {/*<button className="btn btn-info" onClick={this.handleEdit}>Edit</button>*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;