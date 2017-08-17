import React from 'react';
import EventsListItems from './list_item';


const CreatedEventsData = (props) => {
    const list = props.createdEventsList.map((item, index) => {
        return (
            <EventsListItems item={item} key={index}/>
        )
    })

    return(
        <div>
            <ul className="list-group">
                {list}
            </ul>
        </div>
    )
}
export default CreatedEventsData;