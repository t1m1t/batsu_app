import React from 'react';
import Event from './events';
import Modal from 'react-modal';
import Maps  from './map_component';



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
                      <Maps 
                center={{lat:33.6363665, lng:-117.7458193}}
                containerElement={<div style={{ height: `82vh` , width: `100vw`}} />}
                mapElement={<div style={{ height: `82vh` , width: `100vw`}} />}
                markers={[{
                    position: {
                        lat:33.6904288,
                        lng:-117.8330699
                      },
                
                         }]}
                      />
                <button className="btn btn-default btn-circle" onClick={this.openModal} >Create Event!</button>
                <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}  contentLabel="Event Modal">
                    <Event onCancel={(e)=>this.closeModal(e)} />
                </Modal>
            </div>
        )
    }
}

export default Map;