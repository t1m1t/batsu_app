<?php
//****$directory_needed ON SERVER = 'upload_images';***

$token = $_POST['token'];

$stmt = $conn -> prepare("SELECT ID FROM accounts WHERE token=?");
$stmt -> bind_param("s", $token);
$stmt -> execute();
$stmt -> bind_result($id);
$stmt -> fetch();
$stmt -> close();


$upload_dir = 'upload_images/'; //variable to hold images directory on server

$target_file = $upload_dir; //.$_FILES['profile']['name'];

$uploadOK = true;

//$output = ['success' => false];
//echo "tmp dir";
//echo upload_tmp_dir();
//echo sys_get_tmp_dir();



$file = $_FILES['profile']['tmp_name'];

// Check file size
if($_FILES['profile']['size'] == 0){
    $output['errors'][] = 'No file uploaded or the selected file is too large (2MB)';
}
// Allow certain file formats
else{
    $extension_info = pathinfo($_FILES['profile']['name'],PATHINFO_EXTENSION);
//    echo "extension info: ".$extension_info;
    // Check the file extension
    if($extension_info == "gif" || $extension_info == "jpeg" || $extension_info == "jpg" || $extension_info == "png" ){
//        $output['uploaded image'] = 'correct file type';
//        $output['success'] = true;
        $uploadOK = true;

        //****************USING UNIQUE ID TO STORE FILES && AVOID DUPLICATES**********************
        $file_name_new = uniqid('',true).".".$extension_info;
        $target_file = "./".$upload_dir.$file_name_new;


//        echo "target file: ";
//        echo $target_file;
//        echo "haha: ".$_FILES['profile']['tmp_name'];
        //Begin inserting image into file
        if($uploadOK){
            if(move_uploaded_file($file, $target_file)){
//                $output['success'] = true;
                $output['success msg'] = "The file ".$_FILES['profile']['name']." has been uploaded.";

                //begin UPDATE into the database
                $query = " UPDATE `accounts` SET `path` = '$target_file' WHERE id=67 "; // NEED TO KNOW WHICH USER IS LOGGED IN TO KNOW WHERE TO UPDATE
                $result = mysqli_query($conn,$query);

                if(mysqli_affected_rows($conn)>0){
                    $output['success'] = true;
//                    $output['database insert'] = true;
//                    $row = mysqli_insert_id($conn);
//                    $output['insertID'] = $row;
                }
                else{
                    //print(mysqli_error($conn));
                    array_push($output['errors'], 'insert error');
                }
            }
            else{
                array_push($output['errors'][], 'There was an error uploading your file');
            }
        }

    }
    else{
        $uploadOK = false;
        $output['success'] = false;
        array_push($output['errors'], 'incorrect file type');
    }
}

//print_r(json_encode($output));

?>