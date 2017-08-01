<?php
//
//foreach ($_POST as $key => $value){
//    echo($key . " : " . $value." ");
//}
//gettype($_POST);

//echo(count($_POST));

$encryped_pw = password_hash($_POST['password'], PASSWORD_DEFAULT);
$email = $_POST['email'];
$phone = $_POST['phone'];
if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    array_push($output["errors"], 'invalid email');
    exit("invalid email");
}
if(!preg_match("/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/" ,$phone)){
    array_push($output["errors"], 'invalid phone');
    exit("invalid phone");
}
$output['data'] = [];

$stmt = $conn->prepare("INSERT INTO accounts (first_name, last_name, email, phone, password, DOB) VALUES (?,?,?,?,?,?)");
$stmt->bind_param("ssssss", $_POST['fname'], $_POST['lname'], $_POST['email'], $_POST['phone'], $encryped_pw, $_POST['dob']);
$stmt->execute();

    if(mysqli_affected_rows($conn) === 1){
        $output['success'] = true;
        $output['data']=[
            'fname'=>$_POST['fname'],
            'lname' => $_POST['lname'],
            'email' => $_POST['email'],
            'phone' => $_POST['phone']

        ];
    }
    else{
        array_push($output["errors"], 'insert error');
    }
    print_r($output);
    $stmt->close();

?>