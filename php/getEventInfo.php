<?php

if(isset($_GET['eventID'])){
    $eventID = (int)$_GET['eventID'];
    $stmt = $conn->prepare("SELECT * FROM events WHERE events.Event_ID = ?");
    $stmt->bind_param("i", $eventID);
    $stmt->execute();
    $stmt->bind_result($creatorid, $eventid, $eventname, $eventdatetime, $eventlat, $eventlong, $eventaddress, $eventdesc);
    $stmt->fetch();
    echo("\ncreatorid: ". $creatorid);
    echo("\neventid: ". $eventid);
    echo("\neventname: ". $eventname);
    echo("\neventdatetime: ". $eventdatetime);
    echo("\neventlat: ". $eventlat);
    echo("\neventlong: ". $eventlong);
    echo("\neventaddress: ". $eventaddress);
    echo("\neventdesc: ". $eventdesc);

    $stmt1 = $conn->prepare("SELECT Attendee_ID FROM event_attendees WHERE Event_ID=?");
    $stmt1->bind_param("i", $eventID);
    $stmt1->execute();


    $output["data"]["eventName"] = (object)["eventName" =>eventname, "eventAddress"=> $eventaddress, "eventDescription"=>$eventdesc, "eventLat"=>$eventlat, "eventLong"=>$eventlong];
    //$output["data"]['eventName'] = $eventid;


}
else{
    array_push($ouput['errors'], "event ID isn't set.");
    exit();
}
?>