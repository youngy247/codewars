String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
};
