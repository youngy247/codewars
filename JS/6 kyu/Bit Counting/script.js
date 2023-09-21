var countBits = function(n) {
  const binaryString = n.toString(2);

  const countOnes = binaryString.split('').filter(bit => bit === '1').length;

  return countOnes;
};
