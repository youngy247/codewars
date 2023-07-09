function firstNonRepeatingLetter(string) {
  
    const stringLower = string.toLowerCase()
  
  
    for (let i = 0; i < string.length; i++) {
      const char = string[i]
  
      if (stringLower.split(char.toLowerCase()).length - 1 === 1) {
        return char
      }
    }
  
    return ""
  }