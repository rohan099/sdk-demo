const Sum = (...numbers: number[]) => {
  let aggregateNumber = 0;
  for (const digit of numbers) aggregateNumber += digit;
  return aggregateNumber;
};

const Multiply = (...numbers: number[]) => {
  let aggregateNumber = 1;
  for (const digit of numbers) aggregateNumber *= digit;
  return aggregateNumber;
};

const Sub = (...numbers: number[]) => {
  let aggregateNumber = 1;
  for (const digit of numbers) aggregateNumber -= digit;
  return aggregateNumber;
};

module.exports = {
  Sum,
  Multiply,
  Sub,
};
