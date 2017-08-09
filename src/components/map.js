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

class Map extends React.Component {
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
                <button className="btn btn-default btn-circle" onClick={this.openModal}>+</button>
                <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles} contentLabel="Event Modal">
                    <Event onCancel={(e)=>this.closeModal(e)} />
                </Modal>
            </div>
        )
    }
}

export default Map;