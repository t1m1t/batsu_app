import React, { Component } from 'react';
import './modal.css';


class Confirm extends Component {
    constructor(props){
        super(props);

        this.state = {
            showModal: false
        }
    }
    handleConfirm(){
        this.props.onClick();
        this.setState({showModal:false});
    }
    render(){
        const { text, className, message, title } = this.props;
        if(this.state.showModal){
            return (
                <div className="del-modal">
                    <div className="del-modal-content">
                        <p>{title}</p>
                        <p>{message}</p>
                        <button onClick={() => this.setState({showModal: false})} className="btn btn-outline-danger ml-2">Cancel</button>
                        <button onClick={() => this.handleConfirm()} className="btn btn-outline-success">Confirm</button>
                    </div>
                </div>
            )
        }
        return (
            <button className={className} onClick={() => this.setState({showModal:true})}>{text}</button>
        )
    }
}

export default Modal;