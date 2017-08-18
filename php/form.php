<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require("./mysql_connect.php");

$output = [
    'success'=> false, //we assume we will fail
    'errors'=>[]
];

$_POST = json_decode(file_get_contents('php://input'), true);

if($_GET['operation'] === "checkIn"){
    include("./checkIn.php");
}
if($_GET['operation'] === "insertUser"){
    include("./insertAccount.php");
}
else if($_GET['operation'] === "getTime"){
    include("./getTime.php");
}
else if($_GET['operation'] === "signin"){
    include("./authenticate_login.php");
}
else if($_GET['operation'] === "insertEvent"){
    include("./insertEvent.php");
}
else if($_GET['operation'] === "uploadImage"){
    include("./updateProfilePic.php");
}


//if(count($output['errors'])===0){
//    $output['errors'] = false;
//}


$outputJSON = json_encode($output);
echo($outputJSON);
exit();

?>