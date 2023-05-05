function removeSmallest(arr) {
    if (arr.length === 0) {
      return [];
    }
  
    const min = Math.min(...arr)
    const minIndex = arr.indexOf(min)
  
    return arr.filter((_, index) => index !== minIndex)
  }
  