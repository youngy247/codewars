function smallest(n) {
  let s = String(n);
  let min = n;
  let from = 0;
  let to = 0;

  for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < s.length; j++) {
          // Create a new string by removing the i-th digit and inserting it into the j-th position
          let newStr = s.slice(0, i) + s.slice(i + 1);
          newStr = newStr.slice(0, j) + s[i] + newStr.slice(j);
          
          // If the new number is smaller and the 'from' index is smaller or equal to the current smallest 'from' index
          if (parseInt(newStr) < min || (parseInt(newStr) === min && i <= from)) {
              min = parseInt(newStr);
              from = i;
              to = j;
          }
      }
  }

  return [min, from, to];
}
