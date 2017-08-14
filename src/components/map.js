import React from 'react';
import Event from './events';
import Modal from 'react-modal';


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
                <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} contentLabel="Event Modal">
                    <Event onCancel={(e)=>this.closeModal(e)} />
                </Modal>
<<<<<<< HEAD
                <button className="btn btn-default btn-circle map_modal_button" onClick={this.openModal}>Create Event</button>
=======
                <button className="btn btn-default btn-circle" onClick={this.openModal}>+</button>
>>>>>>> 29abb053cb43f5afa2a0a46180c4bed2fdf23e7f
            </div>
        )
    }
}

export default Map;