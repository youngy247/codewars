function duplicateEncode(word){
  word = word.toLowerCase();
  let result = '';
  
  for(let char of word) {
      if(word.split(char).length - 1 > 1) {
          result += ')';
      } else {
          result += '(';
      }
  }
  
  return result;
}
