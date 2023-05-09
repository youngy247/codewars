<?php
function solution($str): array
{
    $pairs = str_split($str, 2);
    if (empty($str)) {
        return [];
    }
    elseif (strlen($str) % 2 == 1) {
        $last_pair = array_pop($pairs);
        $last_pair .= '_';
        array_push($pairs, $last_pair);
    }
    return $pairs;
}
