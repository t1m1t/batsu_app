import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = '../../form.php?operation=insert';

class Actions extends Component {
    constructor(props){
        super(props);

        this.state = {
            form: []
        }
    }

    addEvent(item){
        axios.post(`${BASE_URL}`, item).then((response) => {
            this.setState({
                list:{...list}
            })

        }).catch((error) => {
            console.warn("error adding to server:", error);
        });

    }
}


export default Actions;
