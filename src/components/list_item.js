import React from 'react';


const EventsListItems = (props) => {
    const {item} = props;
    return (
        <li onClick={function(){console.log(props.item.event_id)}} className="list-group-item">
            <span className="col-2">{item.event_name}</span>
            <span className="col-2">{item.creator_id}</span>
            <span className="col-2">{item.event_dateTime}</span>
        </li>
    )
}
export default EventsListItems;