import React from 'react';


export default props => {

    console.log('message list : ',props.message);
    const message = props.message.map((item,index) => {
        return(
            <p className="list-group-item" key={index}>
                <span className="col-10">{item.message}</span>
            </p>
        )
    });

    return (
        <div>
            <span>{}: </span><p className="list-group">{message}</p>
        </div>
    )
}