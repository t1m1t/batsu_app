import React, {Component} from 'react';
import { Route, Link} from 'react-router-dom';
import LogInForm from './title_input';
import DropDownForm from './dropdown_title';
import Event from './events';
import Modal from 'react-modal';
import './app.css';


const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            modalIsOpen:false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({modalIsOpen: true});
    }
    closeModal() {
        return (this.setState({modalIsOpen: false}))
    }

    render(){
        return(
            <div className="batsu-app">
                <h1 className="batsu-title">_Batsu</h1>
                <LogInForm/>
                <div>
                    <div className="signup-top-div">
                        <button className="signup-button">
                            <Link to="/sign_up">Sign Up</Link>
                        </button>
                        <div>
                        <button className="signup-button" onClick={this.openModal}>Event</button>
                            <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles} contentLabel="Modal">
                                <Event onCancel={(e)=>this.closeModal(e)}/>
                            </Modal>
                        </div>
                    </div>
                    <div className="line_space"></div>
                    <DropDownForm />
                    <h4 className="login_trouble">Having Trouble Logging In?</h4>
                    <div className="title_bottom_links">
                        <Link className="title_routes" to="/">Contact</Link>
                        <Link className="title_routes" to="/">Legal</Link>
                        <Link className="title_routes" to="/">Privacy</Link>
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;
