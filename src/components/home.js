import React from 'react';
import Event from './events';
import Modal from 'react-modal';
import Maps from './map_component';


class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            modalIsOpen: false,
            position: {}
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
                <Maps
                    center={{lat:33.6904288, lng:-117.8330699}}
                    containerElement={<div className='hi' style={{ height: `82vh` , width: `100vw`}} />}
                    mapElement={<div style={{ height: `82vh` , width: `100vw`}} />}
                    markers={[{
                        position: {
                            lat:33.6904288,
                            lng:-117.8330699
                        },
                    }]} />

                <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} contentLabel="Event Modal">
                    <Event onCancel={(event)=>this.closeModal(event)} />
                </Modal>

                <button className="btn btn-default btn-circle create_event_button" onClick={this.openModal} >Create Event!</button>
            </div>
        )
    }
}

export default Home;