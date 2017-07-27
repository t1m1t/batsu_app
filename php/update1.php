<?php

$stmt = $conn->prepare("UPDATE accounts SET first_name=? WHERE email=?");
$stmt->bind_param("ss", $_POST['fname'], $_POST['email']);
$stmt->execute();

if(mysqli_affected_rows($conn) === 1){
    $output['success'] = true;
}
else{
    array_push($output["errors"], 'delete error');
}
$stmt->close();

?>
