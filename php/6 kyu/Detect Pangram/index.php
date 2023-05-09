<?php
function detect_pangram($string) {
    $string = preg_replace('/[^a-z]/i', '', strtolower($string));

    return count(array_unique(str_split($string))) == 26;
}
