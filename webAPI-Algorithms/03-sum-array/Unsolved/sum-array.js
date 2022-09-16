// Write code to add all the numbers in `arr` and return the total

var sumArray = function (arr) {
  let returnNum = 0;
  for (let i = 0; i < arr.length; i++) {
    returnNum += arr[i];
  }
  return returnNum;
};
