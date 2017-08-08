import React from 'react';
import Event from './events';
import Modal from 'react-modal';

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

class Maps extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({modalIsOpen: true});
    }


    closeModal() {
        this.setState({modalIsOpen: false});
    }


    render(){
        return(
            <div>
                <button>Home</button>
                <button>Profile</button>
                <button>Logout</button>
                <button onClick={this.openModal}>Event</button>
                <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles} contentLabel="Example Modal">
                    <Event onCancel={(e)=>this.closeModal(e)} />
                </Modal>
            </div>
        )
    }
}

export default Maps;