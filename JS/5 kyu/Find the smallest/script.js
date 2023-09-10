function smallest(n) {
  const s = n.toString();
  let minNum = n;
  let iMin = 0, jMin = 0;

  for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < s.length; j++) {
          if (i !== j) {
              const moved = s.substring(0, i) + s.substring(i+1);  // remove the ith char
              const newNum = parseInt(moved.substring(0, j) + s[i] + moved.substring(j));
              if (newNum < minNum || (newNum === minNum && i < iMin) || (newNum === minNum && i === iMin && j < jMin)) {
                  minNum = newNum;
                  iMin = i;
                  jMin = j;
              }
          }
      }
  }

  return [minNum, iMin, jMin];
}
