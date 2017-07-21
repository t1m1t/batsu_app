<?php
//echo("get superglobal check");
//$_DELETE = file_get_contents('php://input');

//print_r("delete: ". $_DELETE);
//print_r("request: ". $_REQUEST);

$query = sprintf("DELETE FROM accounts WHERE email='%s'", $_POST['delete_text']);
echo($query);
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