<?php

if(isset($_GET['eventID'])){
    $eventID = (int)$_GET['eventID'];
    $query = "SELECT * FROM events WHERE events.Event_ID = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $eventID);
    $stmt->execute();
    $stmt->bind_result($creatorid, $eventid, $eventname, $eventdatetime, $eventlat, $eventlong, $eventaddress, $eventdesc);
    $stmt->fetch();
    $stmt->close();
    $query1 = "SELECT Attendee_ID, Attendee_First_Name, Attendee_Last_Name, isCreator, Punishment FROM event_attendees WHERE Event_ID = ?";
    if($stmt1 = $conn->prepare($query1)){
        $stmt1->bind_param("i", $eventID);
        $stmt1->execute();
        $stmt1->bind_result($attendeeID, $attendeeFName, $attendeeLName, $isCreator, $Punishment);
        $eventinvitees = [];
        while($stmt1->fetch()){
            array_push($eventinvitees, (object)["account_ID" => $attendeeID, "fName" => $attendeeFName, "lName" => $attendeeLName, "isCreator" => $isCreator]);
        }
        $stmt1->close();
    }
    $output['success'] = true;
    $output["data"] = (object)["eventName"=>$eventname, "eventDateTime"=>$eventdatetime , "eventinvitees"=>$eventinvitees, "eventPunishment"=>$Punishment, "eventAddress"=>$eventaddress, "eventDescription"=>$eventdesc, "eventLat"=>$eventlat, "eventLong"=>$eventlong];
}
else{
    array_push($ouput['errors'], "event ID isn't set.");
    exit();
}
?>