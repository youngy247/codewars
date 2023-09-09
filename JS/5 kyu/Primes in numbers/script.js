function primeFactors(n) {
  let result = '';

  // Count the number of times 2 divides n
  let count = 0;
  while (n % 2 === 0) {
      n /= 2;
      count++;
  }
  if (count > 0) {
      result += '(2';
      if (count > 1) {
          result += '**' + count;
      }
      result += ')';
  }

  // Now n must be odd, so start from 3 and increment by 2
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
      count = 0;
      while (n % i === 0) {
          n /= i;
          count++;
      }
      if (count > 0) {
          result += '(' + i;
          if (count > 1) {
              result += '**' + count;
          }
          result += ')';
      }
  }

  // If n is a prime greater than 2
  if (n > 2) {
      result += '(' + n + ')';
  }

  return result;
}
