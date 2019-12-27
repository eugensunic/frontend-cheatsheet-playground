var a = function b() {};

console.log(typeof b); //gives undefined
console.log(typeof a); //gives function


// find intersection in JS


// HTML

{/* <div class="main">
  <div class="target"></div>
  <div id="A" class="obj">A</div>
  <div id="B" style="top:15%; left:50%;" class="obj">B</div>
  <div id="C" style="top:20%; left:40%;" class="obj">C</div>
</div> */}


// CSS
// .main {
//     width: 50%;
//     height: 200px;
//     border: 5px solid #000;
//     position: relative;
//   }
  
//   .target {
//     position: absolute;
//     border: 1px dashed red;
//     width: 100px;
//     height: 100px;
//     top: 10%;
//     left: 30%;
//   }
  
//   .obj {
//     width: 40px;
//     height: 40px;
//     border: 1px solid blue;
//     position: absolute;
//   }
  

const objA = document.getElementById('A').getBoundingClientRect();
const objB = document.getElementById('B').getBoundingClientRect();
const objC = document.getElementById('C').getBoundingClientRect();

// objA x,y
/* console.log(objA.getBoundingClientRect()) */
// objB x,y

// Point B
const Bx2 = objB.x;
const Bx1 = objB.x - objB.width;
const By1 = objB.y;
const By2 = objB.y + objB.height;
// Point C
const Cx2 = objC.x;
const Cx1 = objC.x - objC.width;
const Cy1 = objC.y;
const Cy2 = objC.y + objC.height;

// Point A
const Ax2 = objA.x;
const Ax1 = objA.x - objA.width;
const Ay1 = objA.y;
const Ay2 = objA.y + objA.height;

console.log('B point:', Bx1, Bx2, By1, By2);
console.log('C point:', Cx1, Cx2, Cy1, Cy2);
console.log('C point:', Ax1, Ax2, Ay1, Ay2);


// B overlaps C
if (Bx1 < Cx2 || By2 < Cy1) {
  console.log('B and C overlap')
}

// B inside C
if ((Bx1 > Cx1 && Bx2 < Cx2) && (By2 < Cy2 && By1 > Cy1)) {
  console.log('B and C overlap')
}

// B outside C and does not overlap C
if (!(Ax1 > Cx1 && Ax2 < Cx2) && (Ay2 < Cy2 && Ay1 > Cy1)) {
  console.log('A outside B')
}
