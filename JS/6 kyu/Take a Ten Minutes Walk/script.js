function isValidWalk(walk) {
  if (walk.length !== 10) {
    // If the walk is not exactly 10 minutes long, return false
    return false;
  }

  // Initialize counters for each direction
  let northCount = 0;
  let southCount = 0;
  let eastCount = 0;
  let westCount = 0;

  // Count the number of steps in each direction
  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n':
        northCount++;
        break;
      case 's':
        southCount++;
        break;
      case 'e':
        eastCount++;
        break;
      case 'w':
        westCount++;
        break;
      default:
        // Invalid direction
        return false;
    }
  }

  // Check if you return to the starting point
  return northCount === southCount && eastCount === westCount;
}
