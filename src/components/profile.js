import React, { Component } from 'react';
import axios from 'axios';
import './app.css';

class Profile extends Component {
    constructor(props){
        super(props);

        this.state = {
            userData:{
                file:'',
                profile_pic:'',
                fname: '',
                lname: '',
                phone: '',
                email: ''
            }
        }
        // this.handleAxios();
    }



    handleAxios(){
        // const {form} = this.state;
        // console.log(form);
        console.log(this.state);
        axios.get('http://localhost/Website/accountability_db/c5.17_accountability/php/getData.php?operation=profile&session='+document.cookie).then((resp) => {
            console.log(resp);
            this.setState({userData: resp.data.data});
        })
    }

    componentWillMount(){
        this.handleAxios();
    }

    handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        };
        reader.readAsDataURL(file)
    }

    render() {
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
                        {profilePic}
                    </div>
                    <form>
                        Select image to upload:
                        <input className="fileInput" type="file" name="myFile" onChange={(e)=>this.handleImageChange(e)}/>
                        <button className="fileButton" type="submit">Upload</button>
                    </form>
                    <div className="card-block">
                        <ul className="list-group list-group-flush container">
                            <li className="list-group-item">Email: {this.state.userData.email}</li>
                            <li className="list-group-item">Name: {this.state.userData.fname.concat(" ").concat(this.state.userData.lname)}</li>
                            <li className="list-group-item">Phone: {this.state.userData.phone}</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;