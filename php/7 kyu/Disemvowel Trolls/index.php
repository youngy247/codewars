<?php
function disemvowel($string) {
    return preg_replace("/[aeiou]/i", '', $string);;
}
