<?php
function find_average($array): float {
    $total = 0;
    if(empty($array)){
        return 0;
    }
    else {
        foreach($array as $value){
            $total += $value;
        }
        return $total / count($array);
    }
}
