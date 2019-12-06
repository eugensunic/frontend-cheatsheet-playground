// question 1, call, bind, apply
const a = function(x) {
  this.x = x;
};

const b = function(x, y) {
  this.y = y;
  a.call(this, x);
};

b.prototype.getX = function() {
  return this.x;
};

b.prototype.getY = function() {
  return this.y;
};

const newB = new b("x", "y");
console.log(newB.getX());
console.log(newB.getY());

// question 2 recursion, on  object immutability
const a = {
  a: {
    b: "c"
  }
};
function immutableObject(obj) {
  let newObj = {};
  for (let key in obj) {
    if (obj[key] instanceof Object) {
      newObj = {
        ...newObj,
        [key]: immutableObject(obj[key])
      };
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
const c = immutableObject(a);
c.a.b = 100;
console.log(c);
console.log(a);

// question 3 closures
function outer(arr) {
  let index = 0;
  let newArr = [];
  return function inner() {
    if (index < arr.length) {
      newArr = [];
      for (let i = index; i < index + 3; i++) {
        newArr.push(arr[i]);
      }
      index += 3;
      return newArr;
    } else {
      return newArr;
    }
  };
}

const a = outer([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(a());
console.log(a());
console.log(a());
console.log(a());

// questions 4 event bubbling

// CSS
#container {
    width: 260px;
    height: 170px;
    background-color: brown;
    padding-top: 40px;
  }
  
  #outter {
    width: 200px;
    height: 80px;
    background: orange;
    margin: 0 auto;
    padding-top: 35px;
  }
  
  #inner {
    background: purple;
    width: 100px;
    height: 50px;
    margin: auto;
  }
innerDiv = document.getElementById("inner");
innerDiv.onclick = function(e) {
  console.log("PURPLE");
  e.stopPropagation();
};

// HTML

<div id="container">
  <div id="outter">
    <div id="inner">
    </div>
  </div>
</div>

// JS
innerDiv = document.getElementById("inner");
innerDiv.onclick = function(e) {
  console.log("PURPLE");
  e.stopPropagation();
}

outterDiv = document.getElementById("outter");
outterDiv.onclick = function(e) {
  e.stopPropagation();
  console.log("ORANGE");
};

containerDiv = document.getElementById("container");
containerDiv.onclick = function(e) {
  e.stopPropagation();
  console.log("BROWN");
}


// Write a function:

// function solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Assume that:

// N is an integer within the range [1..100,000]
// Each element of array A is an integer within the range [−1,000,000..1,000,000]



const arr1 = [1, 3, 6, 4, 1, 2]; // 5
const arr2 = [1, 2, 3]; // 4
const arr3 = [-1, -2, 0]; //1
const arr4 = [-1, -2, 0, 4, 7, 9]; //1

function minIntegerOutsideList(arr) {
if (arr.every(x => x <= 0)) {
  return 1;
}

const sorted = [...new Set(arr.filter(x => x > 0))].sort();
let cnt = 1;
for (let i = 0; i < sorted.length; i++) {
  if (cnt !== sorted[i]) {
    return cnt;
  }
  ++cnt;
}
return sorted[sorted.length - 1] + 1;
}

console.log(minIntegerOutsideList(arr1));
console.log(minIntegerOutsideList(arr2));
console.log(minIntegerOutsideList(arr3));
console.log(minIntegerOutsideList(arr4));


// COMPLEX SORT  
const arr = [{
  a: 1,
  b: 5
}, {
  a: 2,
  b: 6
}, {
  a: 3,
  b: 5
}]

function complexSort(arr, key, orderBy) {
  return arr.sort((x, y) => {
    const flag = orderBy === 'ASC' ? -1 : 1;
    if (x[key] < y[key]) {
      return flag;
    } else if (x[key] > y[key]) {
      return flag * -1
    }
    return 0
  })
}


console.log(complexSort(arr, 'b', 'DESC'));

