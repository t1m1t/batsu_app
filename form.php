<?php
require("mysql_connect.php");

$output = [
    'success'=> false, //we assume we will fail
    'errors'=>[]
];


//echo("get superglobal check");
//$query = sprintf("INSERT INTO accounts SET first_name='%s', last_name='%s', email='%s', phone='%s'", $_POST['fname'], $_POST['lname'], $_POST['email'], $_POST['phone']);
//
//$result = mysqli_query($conn, $query);
//
//if(empty($result)){
//    array_push($output["errors"], 'database error');
//}
//else{
//    if(mysqli_affected_rows($conn) === 1){
//        $output['success'] = true;
//    }
//    else{
//        array_push($output["errors"], 'insert error');
//    }
//}



if($_GET['operation'] === "insert"){
    include("./php/insert1.php");
}
else if($_GET['operation'] === "readAll"){
    include("./php/read.php");
}
else if($_GET['operation'] === "delete"){
    include("./php/delete1.php");
}
else if($_GET['operation'] === "update"){
    include("./php/update1.php");
}




if($output['success'] === false){
    $output['errors'] = mysqli_error($conn);
}
$outputJSON = json_encode($output);
echo($outputJSON);
exit();

?>