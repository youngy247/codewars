function duplicateCount(text){
  const charCount = {};
  let count = 0;

  input = text.toLowerCase();

  for (const char of input) {
    if (/[a-z0-9]/.test(char)) {
      
      charCount[char] = (charCount[char] || 0) + 1;

      if (charCount[char] === 2) {
        count++;
      }
    }
  }

  return count;
}
