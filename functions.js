const returnEmptyString = function () {
  return "";
};

const returnZeroNumber = function () {
  return 0;
};

const returnEmptyArray = function () {
  return [];
};

const returnEmptyObject = function () {
  return {};
};

const returnAbcString = function (value) {
  return "abc123";
};

const returnSumOfTen = function (arg1, arg2) {
  return arg1 + arg2;
};

const subtraction = function (arg1, arg2) {
  return arg1 - arg2;
};

const multiplication = function (arg1, arg2) {
  return arg1 * arg2;
};

const division = function (arg1, arg2) {
  return arg1 / arg2;
};

const returnArray = function (arg1) {
  return arg1;
};

const returnFirstIndex = function (arg1) {
  return arg1[0];
};

const returnSecondIndex = function (arg1) {
  return arg1[1];
};

const returnArrayLength = function (arg1) {
  return arg1[(0, 1, 2)];
};

const arraySum = function (arg1) {
  let result = 0;
  for (let i = 0; i < arg1.length; i++) {
    result += arg1[i];
  }
  return result;
};

const arraySubtraction = function (arg1) {
  let result = 0;
  for (let i = 0; i < arg1.length; i++) {
    result -= arg1[i];
  }
  return result;
};

const multiplicationArray = function (arg1) {
  let result = 1;
  for (let i = 0; i < arg1.length; i++) {
    result *= arg1[i];
  }
  return result;
};

const divisionArray = function (arg1) {
  let result = 1;
  for (let i = 0; i < arg1.length; i++) {
    result /= arg1[i];
  }
  return +result.toFixed(3);
};

const oddArray = function (arg1) {
  return arg1.filter((arg1) => arg1 % 2 === 1);
};

const evenArray = function (arg1) {
  return arg1.filter((arg1) => arg1 % 2 === 0);
};

const returnFruits = function (arg1) {
  let result = [];
  for (let i = 0; i < arg1.length; i++) {
    if (arg1[i] === "apple") {
      result.push(arg1[i]);
    }
    if (arg1[i] === "orange") {
      result.push(arg1[i]);
    }
  }
  return result;
};
