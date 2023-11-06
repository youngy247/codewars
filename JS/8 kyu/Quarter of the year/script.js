const quarterOf = (month) => {
  const seasons = {
    1: [1, 2, 3],
    2: [4, 5, 6],
    3: [7, 8, 9],
    4: [10, 11, 12],
  };

  let result;

  Object.keys(seasons).forEach((quarter) => {
    if (seasons[quarter].includes(month)) {
      result = parseInt(quarter);
    }
  });

  return result;
};
