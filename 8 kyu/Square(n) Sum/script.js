function squareSum(numbers){
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i] * numbers[i];
    }
    sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum
}
