<?php
function enough($cap, $on, $wait) {
    return $on + $wait > $cap ? $on + $wait - $cap : 0;
};
