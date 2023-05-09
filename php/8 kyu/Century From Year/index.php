<?php
function centuryFromYear($year): int
{
    $year = ceil($year/100);
    return $year;
}
