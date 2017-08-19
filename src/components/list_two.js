import React from 'react';
import EventsListItems from './list_item';


const InvitedEventsData = (props) => {
    const listtwo = props.invitedEventsList.map((item, index) => {
        return (
            <EventsListItems item={item} key={index}/>
        )
    })

    return(
        <div>
            <ul className="list-group">
                {listtwo}
            </ul>
        </div>
    )
}
export default InvitedEventsData;