import React from 'react';


const Invitee = (props) => {
    const {item} = props;
    // console.log("props: ", props);
    const itemPath = "http://localhost/Website/accountability_db/c5.17_accountability/php"+item.path.substr(1);

    return (
        <div className="attendee_img_contain">
            <img className="attendee_pic" src={itemPath} alt=""/>
            <p>{item.fName}</p>
        </div>
    )
}
export default Invitee;
