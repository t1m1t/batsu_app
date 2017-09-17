<?php
$token = $_GET['token'];
$stmt = $conn->prepare("SELECT ID FROM accounts WHERE token=?");
$stmt -> bind_param("s", $token);
$stmt -> execute();
$stmt->bind_result($id);
$stmt->fetch();
$stmt->close();

$myStatus = null;
if(isset($_GET['eventID'])){
    $eventID = (int)$_GET['eventID'];
    $query = "SELECT * FROM events WHERE events.Event_ID = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $eventID);
    $stmt->execute();
    $stmt->bind_result($creatorid, $eventid, $eventname, $eventdatetime, $eventlat, $eventlong, $eventaddress, $eventdesc);
    $stmt->fetch();
    $stmt->close();
    $query1 = "SELECT EA.Attendee_ID, EA.Attendee_First_Name, EA.Attendee_Last_Name, EA.isCreator, EA.Punishment, EA.Attendee_Status, A.path FROM event_attendees AS EA INNER JOIN accounts as A on A.ID =EA.Attendee_ID WHERE Event_ID = ?";
    if($stmt1 = $conn->prepare($query1)){
        $stmt1->bind_param("i", $eventID);
        $stmt1->execute();
        $stmt1->bind_result($attendeeID, $attendeeFName, $attendeeLName, $isCreator, $Punishment, $attendeeStatus, $path);
        $eventinvitees = [];
        while($stmt1->fetch()){
            if($attendeeID === $id){
                $myStatus = $attendeeStatus;
            }
            array_push($eventinvitees, (object)["account_ID" => $attendeeID, "fName" => $attendeeFName, "lName" => $attendeeLName, "isCreator" => $isCreator, "status"=>$attendeeStatus, "path"=>$path]);
        }
        $stmt1->close();
    }
    if($myStatus === null){
        $output['success'] = false;
    }
    else{
        $output['success'] = true;
        $output["data"] = (object)["eventName"=>$eventname, "eventDateTime"=>$eventdatetime , "eventinvitees"=>$eventinvitees, "myStatus"=>$myStatus, "eventPunishment"=>$Punishment, "eventAddress"=>$eventaddress, "eventDescription"=>$eventdesc, "eventLat"=>$eventlat, "eventLong"=>$eventlong];
    }
}
else{
    array_push($ouput['errors'], "event ID isn't set.");
    exit();
}
?>