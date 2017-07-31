<?php
//echo("get superglobal check");
$query = sprintf("INSERT INTO accounts SET first_name='%s', last_name='%s', email='%s', phone='%s'", $_POST['fname'], $_POST['lname'], $_POST['email'], $_POST['phone']);

$result = mysqli_query($conn, $query);

if(empty($result)){
    array_push($output["errors"], 'database error');
}
else{
    if(mysqli_affected_rows($conn) === 1){
        $output['success'] = true;
    }
    else{
        array_push($output["errors"], 'insert error');
    }
}
?>