function maps(x){
    y = x.map(timesTwo)

    function timesTwo(num) {
        return num * 2;
    }
    return y;
}