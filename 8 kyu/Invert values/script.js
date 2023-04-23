function invert(array) {
    let invert = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            invert.push(array[i] - (array[i] * 2));
        }
        if (array[i] < 0) {
            invert.push(Math.abs(array[i]));
        }
        if (array[i] == 0) {
            invert.push(-0);
        }
    }
    return invert;
}
