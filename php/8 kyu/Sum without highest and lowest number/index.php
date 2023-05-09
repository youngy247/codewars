<?php
function sumArray($array) {
    return array_sum($array) - min($array) - max($array);
}
