
function divisors(integer) {
  let arr = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      arr.push(i);
    }
  }
  if (arr.length === 0) {
    return integer + " is prime";
  } else {
    return arr;
  }
};

/*

Test Results:
Test Passed: Value deep equals [3, 5]
Test Passed: Value deep equals [2, 3, 4, 6]
Test Passed: Value deep equals '13 is prime'

*/
