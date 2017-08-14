import React from 'react';


export default props => {

    console.log('todo list : ',props.list);
    const listThree = props.list.map((item,index) => {
        return(
            <li className="list-group-item" key={index}>
                <span className="col-10">{item.title}</span>
            </li>
        )
    });

    return (
        <div>
            <ul className="list-group">
                {listThree}
            </ul>
        </div>
    )
}