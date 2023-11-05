function points(games) {
  let totalPoints = 0;
  
  games.forEach(game => {
    const [home, away] = game.split(":").map(Number);
    
    if (home > away) {
            totalPoints += 3;
        } else if (home === away) {
            totalPoints += 1;
        }
  });
  
  return totalPoints;
}
