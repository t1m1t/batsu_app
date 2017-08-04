import React from 'react';

class Profile extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }
    render(){
        return(
            <div className="container">
                <h1>Profile</h1>
                <div className="profile_pic">

                </div>
                <div className="container">
                    <div className="fname">
                        {}
                    </div>
                    <div className="lname">
                        {}
                    </div>
                    <div className="email">
                        {}
                    </div>
                    <div className="phone">
                        {}
                    </div>
                    <div className="bio">
                        {}
                    </div>
                </div>
                <div className="row">
                    <button className="edit btn btn-info">Edit</button>
                </div>
            </div>
        )
    }
}
export default Profile;