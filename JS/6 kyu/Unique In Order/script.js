var uniqueInOrder = function(sequence){
    if (!Array.isArray(sequence)) {
      sequence = sequence.split('')
    }
  
    return sequence.filter((value, index) => value !== sequence[index - 1])
  }
