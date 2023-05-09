<?php
function correct($string) {
    $new_string = '';
    for ($i = 0; $i < strlen($string); $i++) {
        switch($string[$i]){
            case '5':
                $new_string .= 'S';
                break;
            case '0':
                $new_string .= 'O';
                break;
            case '1':
                $new_string .= 'I';
                break;
            default:
                $new_string .= $string[$i];
                break;
        }
    }
    return $new_string;
}
