import React from 'react';


const Invitee = (props) => {
    const {item} = props;
    console.log("props: ", props);
    const itemPath = "http://localhost/Website/accountability_db/c5.17_accountability/php"+item.path;

    return (
        <div>
            <img src={itemPath} alt=""/>
            <p>{item.fname}</p>
        </div>

    )
}
export default Invitee;
