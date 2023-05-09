<?php
function reverseSeq ($n) {
    $arr = [];
    for ($i = $n; $i > 0; $i --){
        array_push($arr, $i);
    }
    return $arr;
};
