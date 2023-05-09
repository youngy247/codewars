function squareDigits(num){
    let numValue = num.toString().split("")
    numValue = numValue.map(x => x ** 2)
    numValue = numValue.join("")
    return parseInt(numValue)
}
