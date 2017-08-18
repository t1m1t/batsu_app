<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require("./mysql_connect.php");

$output = [
    'success'=> false, //we assume we will fail
    'errors'=>[],
    'data'=>[]
];

if($_GET['operation'] === "profile"){
    include("./getProfile.php");
}
elseif($_GET['operation'] === 'eventinfo'){
    include("./getEventInfo.php");
}
elseif($_GET['operation'] === 'eventlist'){
    include("./getEventList.php");
}

if($output['success'] === false){
    array_push($output['errors'], mysqli_error($conn));
}

$outputJSON = json_encode($output);
echo($outputJSON);
exit();

?>