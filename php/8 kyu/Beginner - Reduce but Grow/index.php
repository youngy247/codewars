<?php
function grow($a) {
    $total = 1;
    foreach($a as $value){
        $total *= $value;
    }
    return $total;
}
