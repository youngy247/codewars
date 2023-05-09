<?php
function remove_exclamation_marks($string) {
    $string = str_replace('!', '', $string);
    return $string;
}
