<?php

$token = $_POST['token'];
$stmt = $conn -> prepare("SELECT ID FROM accounts WHERE token=?");
$stmt -> bind_param("s", $token);
$stmt -> execute();
$stmt -> bind_result($id);
$stmt -> fetch();
$stmt -> close();

$stmt1 = $conn -> prepare("UPDATE event_attendees SET Attendee_Status='Checked In' WHERE ")

?>