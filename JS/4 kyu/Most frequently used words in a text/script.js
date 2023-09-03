function topThreeWords(text) {
  let words = text.toLowerCase().match(/[a-z']+/g) || [];
      let counts = {};
      for (let word of words) {
          if (word !== "'") counts[word] = (counts[word] || 0) + 1;
      }
      return Object.keys(counts)
          .sort((a, b) => counts[b] - counts[a])
          .slice(0, 3);
  }