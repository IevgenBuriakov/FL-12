function getMin(...vals) {
    return vals.reduce((acc, currV) =>
      acc > currV ? currV : acc);
  }
  console.dir(getMin(2,3,2));

