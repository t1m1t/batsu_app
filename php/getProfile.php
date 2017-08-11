<?php

//    print($_GET["session"]);

    session_id($_GET['session']);
    session_start();
    if(!isset($_SESSION['user'])){
       echo "session isn't set";
       array_push($output['errors'], "session isn't set");
       exit();
    }
//    echo $_SESSION['user'];

    $stmt = $conn->prepare("SELECT first_name, last_name, email, phone FROM accounts WHERE ID=?");
    $stmt->bind_param("s", $_SESSION['user']);
    $stmt->execute();
    $stmt->bind_result($fname, $lname, $email, $phone);
    $stmt->fetch();
    if(empty($fname)){
        array_push($output["errors"], 'database error');
        array_push($output['errors'], 'no data');
    }
    else{
        $output['success'] = true;
        $output['data'] = (object)["fname" => $fname, "lname" => $lname, "email"=>$email, "phone"=>$phone];
    }

    $stmt->close();
?>