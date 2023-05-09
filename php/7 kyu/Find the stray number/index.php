<?php
function stray($arr) {
    $counts = array_count_values($arr);
    foreach ($counts as $num => $count) {
        if ($count === 1) {
            return $num;
        }
    }
}
