<?php
function positive_sum($arr) {
    $sum = 0;
    foreach($arr as $value){
        if($value > 0){
            $sum += $value;
        };
    }
    return $sum;
};
