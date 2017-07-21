<?php

    $query = "SELECT * FROM accounts";
    $result = null;
    $result = mysqli_query($conn, $query);

    if(empty($result)){
        $output["errors"] .= ' database error ';
    }
    else{
        $output['data']=[];
        $output['success'] = true;
        if($row = mysqli_fetch_assoc($result)){
            $output['data'][] = $row;
        }
        else{
            $output['errors'] .= 'no data';
        }
        while ($row = mysqli_fetch_assoc($result))
        {
            $output['data'][] = $row;
        }
    }

?>