function findUniq(arr) {
  arr.sort((a, b) => a - b);

  if (arr[0] !== arr[1]) {
    return arr[0];
  }

  return arr[arr.length - 1];
}
