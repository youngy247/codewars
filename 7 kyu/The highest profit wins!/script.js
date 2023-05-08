function minMax(arr){
    a = Math.max(...arr)
    b = Math.min(...arr)
    if(arr.length === 1){
        return [b, b]
    }
    return [b,a]
}
