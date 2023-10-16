function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
      return "";
  }
  
  let longest = "";
  
  for (let i = 0; i <= strarr.length - k; i++) {
      const current = strarr.slice(i, i + k).join('');
      if (current.length > longest.length) {
          longest = current;
      }
  }
  
  return longest;
}
