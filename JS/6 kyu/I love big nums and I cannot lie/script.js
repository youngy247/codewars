function biggest(nums) {

  const sortedArray = nums.map(String);

  sortedArray.sort((a, b) => {
    const order1 = a + b;
    const order2 = b + a;

    return order2.localeCompare(order1);
  });

  if (sortedArray[0] === '0') {
    return '0';
  }

  return sortedArray.join('');
};
