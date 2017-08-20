import React from 'react';
import Invitee from './Invitee';

const ListOfAttendees = (props) => {
    const list = props.eventinvitees;
    const inviteeList = list.map((item) => {
        return (
            <Invitee item={item} key={item.fName}/>
        );
    });

    return(
        <div className="attendee_list">
                {inviteeList}
        </div>

    )
}

export default ListOfAttendees;