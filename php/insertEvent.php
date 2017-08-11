<?php
//$encryped_pw = password_hash($_POST['password'], PASSWORD_DEFAULT);
//$email = $_POST['email'];
//$phone = $_POST['phone'];
//
//if($_POST['password'] !== $_POST['password_conf']){
//    exit("enter two identical passwords");
//}
//
//if(!preg_match( "/^[a-zA-Z](?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{7,31}$/", $_POST['password'])){
//    exit("enter valid password");
//}
//
//if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
//    array_push($output["errors"], 'invalid email');
//    exit("invalid email");
//}
//
//if(!preg_match("/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/" ,$phone)){
//    array_push($output["errors"], 'invalid phone');
//    exit("invalid phone");
//}
//
//$dob = strtotime($_POST['dob']);
//$min = strtotime('+10 years', $dob);
//if(time() < $min){
//    exit("must be older than 10 years old");
//}
//require_once("insertAccount.php");

session_id($_POST['session_id']);
//session_id('mq5ahmjq95jr5nsjbb4fhvcv52');
session_start();

//echo session_id();
if(!isset($_SESSION['user'])){
    array_push($output['errors'], 'php session not defined. Please enable javascript cooooookies');
    exit();
};
$output['data'] = [];

$date = $_POST['date'];
$time = $_POST['time'];
$attending = 'Attending';
$pending = 'Pending';

//$combinedDT = date('Y-m-d H:i:s', strtotime("$date $time"));
$combinedDT = date('Y-m-d H:i:s');

//echo $_POST["location"]["lat"];
//echo $_POST["location"]["lng"];

$stmt = $conn->prepare("INSERT INTO events (Creator_ID, Event_Name, Event_DateTime, Event_Latitude, Event_Longitude, Event_Address, Event_Description) VALUES (?,?,?,?,?,?,?)");
$stmt->bind_param("sssssss", $_SESSION['user'], $_POST["event_name"], $combinedDT, $_POST["location"]["lat"], $_POST["location"]["lng"], $_POST["address"], $_POST["description"]);
$stmt->execute();

if(mysqli_affected_rows($conn) === 1){
    $event_table_id = mysqli_stmt_insert_id($stmt);

    $stmt = $conn->prepare("INSERT INTO event_attendees (Event_ID, Attendee_ID, Attendee_Status, Punishment) VALUES (?,?,?,?)");
    $stmt->bind_param("ssss", $event_table_id, $_SESSION['user'], $attending, $_POST['punishment']);
    $stmt->execute();
    if(mysqli_affected_rows($conn) === 1) {
        if(isset($_POST['invitee'])){
            $event_invitee_list = explode(", ", $_POST['invitee']);
            foreach ($event_invitee_list as $invited_person){
                $stmt = $conn->prepare("SELECT ID FROM accounts WHERE (email) VALUES (?)");
                $stmt->bind_param("s", $invited_person);


                $stmt = $conn->prepare("INSERT INTO event_attendees (Event_ID, Attendee_ID, Attendee_Status, Punishment) VALUES (?,?,?,?)");
                $stmt->bind_param("ssss", $event_table_id, $invited_person, $pending, $_POST['punishment']);
                $stmt->execute();
            }
        }
        $output['success'] = true;
    }

    else{
        array_push($output['errors'], mysqli_error($conn));
    }
}
else{
    array_push($output["errors"], 'insert error');
    array_push($output['errors'], mysqli_error($conn));
}
//print_r($output);
$stmt->close();

?>