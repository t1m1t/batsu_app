<?php




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