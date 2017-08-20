import React from 'react';
import Invitee from './Invitee';

const ListOfAttendees = (props) => {
    const list = props.eventinvitees;
    console.log("props: ", props);
    console.log("Yo this is the current list of invitees");
    const inviteeList = list.map((item) => {
        console.log("list of invitees 1");
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