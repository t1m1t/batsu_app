<?php

$email = $_POST['email'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT ID, password from accounts where email=?");
$stmt -> bind_param("s", $email);
$stmt -> execute();
$stmt -> bind_result($id, $hashed_pw);
$stmt->fetch();
if(isset($id) && isset($hashed_pw)){
    if(password_verify($password, $hashed_pw)){
        $output['success'] = true;
        $time = time();
        $hash_input = (string)$id . (string)$time;
        $hash_output = password_hash($hash_input, PASSWORD_DEFAULT);
        $output["token"] = $hash_output;
        $stmt -> close();

        $stmt1 = $conn->prepare("UPDATE accounts SET token=? WHERE ID=?");
        $stmt1->bind_param("si", $hash_output, $id);
        $stmt1->execute();
        $stmt1->close();
    }
    else{
        array_push($output['errors'], "invalid email or password");
    }
}
else{
    array_push($output['errors'], "invalid email or password");
}

?>
