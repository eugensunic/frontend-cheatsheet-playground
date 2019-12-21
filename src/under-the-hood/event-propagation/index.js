// HTML
// Event bubbling
{
  /* <div id="one">
  <div id="two">
    <div id="three">

    </div>
  </div>
</div>

Event capturing
<div id="four">
  <div id="five">
    <div id="six">

    </div>
  </div>
</div>

Stop propagation bubbling
<div class="parent">
  <div class="child">
    <div class="grandchild">

    </div>
  </div>
</div> */
}

// CSS

// #one {
//     width: 100px;
//     height: auto;
//     background: red;

//     margin: 0 auto;
//     padding: 10px;

//   }

//   #two {
//     width: 60px;
//     height: auto;
//     background: blue;

//     margin: 0 auto;
//     padding: 10px;
//   }

//   #three {
//     width: 30px;
//     height: auto;
//     background: green;

//     margin: 0 auto;
//     padding: 10px;
//   }

//   #four {
//     width: 100px;
//     height: auto;
//     background: orange;
//     margin: 0 auto;
//     padding: 10px;

//   }

//   #five {
//     width: 60px;
//     height: auto;
//     background: violet;
//     margin: 0 auto;
//     padding: 10px;

//   }

//   #six {
//     width: 30px;
//     height: auto;
//     background: grey;
//     margin: 0 auto;
//     padding: 10px;
//   }

//   .parent {
//     width: 100px;
//     background: orange;
//     height: auto;
//     margin: 0 auto;
//     padding: 10px;

//   }

//   .child {
//     width: 60px;
//     height: auto;
//     background: violet;
//     height: auto;
//     margin: 0 auto;
//     padding: 10px;

//   }

//   .grandchild {
//     width: 30px;
//     height: auto;
//     background: grey;
//     height: auto;
//     margin: 0 auto;
//     padding: 10px;
//   }

// bubble --> bottom to top
attachClickEvent('#one', 'red clicked', false);
attachClickEvent('#two', 'blue clicked', false);
attachClickEvent('#three', 'green clicked', false);

// capture --> top to bottom
attachClickEvent('#four', 'yellow clicked', true);
attachClickEvent('#five', 'purple clicked', true);
attachClickEvent('#six', 'grey clicked', true);

function attachClickEvent(id, message, capture, stopPropagation) {
  document.querySelector(id).addEventListener(
    'click',
    e => {
      if (stopPropagation) {
        e.stopPropagation();
      }
      console.log(message);
    },
    {
      capture: capture
    }
  );
}

// capture --> top to bottom
attachClickEvent('.parent', 'yellow clicked', false);
attachClickEvent('.child', 'purple clicked', false);
attachClickEvent('.grandchild', 'grey clicked', false, true);
