// Solution 1
function findWord(sentence, searchWord) {
  let flag;
  let index;

  for (let i = 0; i < sentence.length; i++) {
    flag = true;
    index = -1;
    for (let j = i; j < i + searchWord.length; j++) {
      if (sentence[j] !== searchWord[++index]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return true;
    }
  }
  return false;
}

// Solution 2

function findWord(sentence, searchWord) {
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.substr(i, searchWord.length) === searchWord) {
      return true;
    }
  }
  return false;
}

// Print n random equations where the sum of the two numbers are less than given sum
function printNRandomEquations(n, maxSum) {
  let cnt = 1;
  let x,
    y = 0;
  let arr = [];

  while (cnt != n + 1) {
    x = Math.round(Math.random() * 10);
    y = Math.round(Math.random() * 10);
    if (x + y < maxSum) {
      cnt++;
      const stringExpression = `problem ${cnt - 1}: ${x} + ${y} =`;
      arr.push(stringExpression);
    }
  }
  return arr;
}

// Sum all the borders from a squared array
// const arr = [
//   [1, 2, 3, 4],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 2, 3, 4]
// ];

function sumBordersOf2DArr(arr) {
  let sumOtherRows = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    sumOtherRows += arr[i][0] + arr[i][arr[i].length - 1];
  }

  const sumFirstRow = arr[0].reduce((acc, x) => acc + x, 0);
  const sumLastRow = arr[arr.length - 1].reduce((acc, x) => acc + x, 0);

  return sumFirstRow + sumLastRow + sumOtherRows;
}

//implement your own reduce --> reduce1
Array.prototype.reduce1 = function(fn, initValue) {
  let acc = initValue;

  for (let i = 0; i < this.length; i++) {
    acc = fn(acc, this[i]);
  }
  return acc;
};

const result = [1, 2, 3].reduce1((acc, x) => acc + x, 0);

// multiple closures example in js
function outerFunc(arg) {
  return function(arg1) {
    return function(arg2) {
      return arg2 * 2 + arg1 + arg;
    };
  };
}
console.log(outerFunc(1)(2)(3));

// example of caching promises
promise1 = new Promise((res, rej) => {
  setTimeout(_ => res('result'), 2000);
});

function outer() {
  let cache = null;
  return function() {
    console.log('cache', cache);
    if (!cache) {
      return promise1.then(x => (cache = x));
    }
    return Promise.resolve(cache);
  };
}

const func = outer();

console.log(func().then(x => console.log(x)));

// proof that cache variable is filled with a value
setTimeout(_ => func().then(x => console.log(x)), 4000);
