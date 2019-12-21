const promiseOne = () =>
  new Promise((resolve, reject) => {
    setTimeout(_ => resolve('one'), 1000);
  });

const promiseTwo = () =>
  new Promise((resolve, reject) => {
    setTimeout(_ => resolve('two'), 2000);
  });

const promiseThree = () =>
  new Promise((resolve, reject) => {
    setTimeout(_ => resolve('three'), 3000);
  });

const promiseReject = () =>
  new Promise((resolve, reject) => {
    setTimeout(_ => reject('error occured'), 2000);
  });

// needs 1 second
Promise.race([promiseTwo(), promiseOne(), promiseThree()]).then(res => console.log(res));

// needs 3 seconds explain why, draw graph
Promise.all([promiseTwo(), promiseOne(), promiseThree()]).then(res => console.log(res));

// needs 5 seconds explain why, draw graph compare previous and this example
promiseOne()
  .then(_ => promiseTwo())
  .then(_ => promiseThree())
  .then(res => console.log(res));

Promise.allSettled([promiseTwo(), promiseOne(), promiseThree()]).then(res => console.log(res));

// goes to catch if any promises in the array throws an error
Promise.all([promiseOne(), promiseReject(), promiseThree()])
  .then(res => console.log(res))
  .catch(err => console.log(err));

// goes to catch if any of the chain promises throws an error
promiseOne()
  .then(_ => promiseReject())
  .then(_ => promiseThree())
  .then(res => console.log(res))
  .catch(err => console.log(err));
