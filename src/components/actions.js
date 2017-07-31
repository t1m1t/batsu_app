import React, { Component } from 'react';
import Events from './events';
import axios from 'axios';
// import List from './list';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = "?key=brkm1234";

class Actions extends Component {
    constructor(props){
        super(props);

        this.state = {
            list: []
        }
    }
    componentWillMount(){
        this.fetchEvent();
    }

    fetchEvent(){
        axios.get(`${BASE_URL}/todos${API_KEY}`).then((response) => {
            this.setState({
                list: response.data.todos
            });
            console.log("response: ",response);
        })
    }
    addEvent(item){
        axios.post(`${BASE_URL}/todos${API_KEY}`, item).then((response) => {
            this.setState({
                list:{...list}
            })

        }).catch((error) => {
            console.warn("error adding to server:", error);
        });

    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <Events add={(i) => this.addEvent(i)}/>
                </div>
            </div>
        )
    }
}


export default Actions;
