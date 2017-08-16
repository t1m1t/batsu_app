import React, { Component } from 'react';
import axios from 'axios';
import './app.css';


class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            canEdit:false,
            userData:{
                file:'',
                profile_pic:'',
                fname: 'jay',
                lname: 'die',
                phone: '714-234-2333',
                email: 'jaydie@gmail.com'
            }
        }
    }

    handleAxios(){
        console.log(this.state);
        // console.log("0: "+ document.cookie.split('=')[0]);
        // console.log("1: "+ document.cookie.split('=')[1]);
        axios.get('http://localhost/Website/accountability_db/c5.17_accountability/php/getData.php?operation=profile&token='+document.cookie.split('=')[1]).then((resp) => {
            console.log(resp);
            this.setState({userData: resp.data.data});
        })
    }

    componentWillMount(){
        this.handleAxios();
    }

    handleChange(){
        const{name, value} = event.target;
        const{userData} = this.state;
        userData[name] = value;
        this.setState({userData:{...userData}});
    }

    postProfAxios(){
        const {userData} = this.userData.profile_pic
        console.log(userData);

        axios.post(`${BASE_URL}`, userData).then((resp) => {
            console.log('Add resp:', resp)
        })
    }

    handleImageChange(event) {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        };
        reader.readAsDataURL(file)
    }

    render() {
        if(this.state.canEdit === false){
            return (
                <div>
                    <h1 className="card-title">Profile</h1>
                    <div className="card profile_parent">
                        <div className="profile_picture_preview">
                            <img src="https://www.biography.com/.image/t_share/MTQ3NjM5ODIyNjU0MTIxMDM0/snoop_dogg_photo_by_estevan_oriol_archive_photos_getty_455616412.jpg" alt=""/>
                        </div>
                        <div className="card-block">
                            <ul className="list-group list-group-flush container">
                                <li className="list-group-item">Email: {this.state.userData.email}</li>
                                <li className="list-group-item">FName: {this.state.userData.fname}</li>
                                <li className="list-group-item">LName: {this.state.userData.lname}</li>
                                <li className="list-group-item">Phone: {this.state.userData.phone}</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <button onClick={() => this.setState({canEdit: true})} className="btn btn-outline-danger">Edit</button>
                    </div>
                </div>
            )
        } else {
            let {imagePreviewUrl} = this.state;
            let profilePic = null;
            if (imagePreviewUrl) {
                profilePic = (<img src={imagePreviewUrl}/>);
            } else {
                profilePic = (<div className="previewText">Please select an Image for Preview</div>);
            }
            return (
                <div>
                    <h1 className="card-title">Profile</h1>
                    <div className="card profile_parent">
                        <div className="profile_picture_preview">
                            {/*{this.state.userData.profile_pic}*/}
                            {profilePic}
                        </div>
                        <form>
                            Select image to upload:
                            <input className="fileInput" type="file" name="myFile" onChange={(event)=>this.handleImageChange(event)}/>
                            <button className="fileButton" type="submit">Upload</button>
                        </form>
                        <div className="card-block">
                            <ul className="list-group list-group-flush container">
                                <li className="list-group-item">Email: <input type="text" name="email" onChange={(event)=>this.handleChange(event)} value={this.state.userData.email}/></li>
                                <li className="list-group-item">First Name: <input type="text" name="fname" onChange={(event)=>this.handleChange(event)} value={this.state.userData.fname}/></li>
                                <li className="list-group-item">Last Name: <input type="text" name="lname" onChange={(event)=>this.handleChange(event)} value={this.state.userData.lname}/></li>
                                <li className="list-group-item">Phone: <input type="text" name="phone" onChange={(event)=>this.handleChange(event)} value={this.state.userData.phone}/></li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <button onClick={() => this.setState({canEdit: false})} className="btn btn-outline-info">Save</button>
                    </div>
                </div>
            )
        }
    }
}
export default Profile;