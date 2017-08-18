<?php

$token = $_POST['token'];
$stmt = $conn -> prepare("SELECT ID FROM accounts WHERE token=?");
$stmt -> bind_param("s", $token);
$stmt -> execute();
$stmt -> bind_result($id);
$stmt -> fetch();
$stmt -> close();

$stmt1 = $conn -> prepare("UPDATE event_attendees SET Attendee_Status='Checked In' WHERE Attendee_ID = ?");
$stmt1 -> bind_param("s", $id);
$stmt1 -> execute();
$stmt1 -> close();

if(mysqli_affected_rows($conn) > 0){
    $output['success'] = true;
}
else{
    array_push($output["errors"], 'insert error');
}

?>