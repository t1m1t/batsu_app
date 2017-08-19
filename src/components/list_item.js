import React from 'react';
import { Link } from 'react-router-dom';


const EventsListItems = (props) => {
    const {item} = props;
    console.log(item);
    const id = props.item.event_id;
    console.log(id);
    return (
        <li onClick={() => {console.log(props.item.event_id)}} className="list-group-item">
            <Link to={`/preview_event/${id}`}>
                <span className="col-2">{item.event_name}</span>
                <span className="col-2">{item.creator_id}</span>
                <span className="col-2">{item.event_dateTime}</span>
            </Link>
        </li>
    )
}
export default EventsListItems;