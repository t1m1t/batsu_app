import React, {} from 'react';
import Invitee from './Invitee';

const listofInvitees = (props) => {
    console.log("Yo this is the current list of invitees");
    const inviteeList = props.list.eventinvitees.map((item, index) => {
        console.log("list of invitees 1");
        return (
            <Invitee item={item} key={index}/>
        )
    })

    return(
        <div>
                {inviteeList}
        </div>
    )
}
export default listofInvitees;