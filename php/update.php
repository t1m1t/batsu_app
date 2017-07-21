<?php
$query = "UPDATE accounts SET first_name='call me bk' WHERE email='aaaer'";
$result = null;
$result = mysqli_query($conn, $query);

if(empty($result)){
    $output["errors"] .= ' database error ';
}
else{
    $output['data']=[];

    if(mysqli_affected_rows($conn)>0){
        $output['success'] = true;
        $output['data'][] = $result;
    }
    else{
        $output['errors']='insert error';
    }
}
?>
