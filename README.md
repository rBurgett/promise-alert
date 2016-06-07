# promise-alert
A wrapper for [sweetalert](http://t4t5.github.io/sweetalert/) to return promises for use with generators.

### Introduction
`promise-alert` takes the fantastic [sweetalert](http://t4t5.github.io/sweetalert/) library and wraps it so that each call returns a promise. This means that each sweetalert alert, prompt, and confirm you open now returns a promise rather than taking a callback. If you prefer promises over callbacks, then this allows you to use sweetalert in that way. **BUT, the real benefits of this comes with generator functions. Using generators, you can write synchronous code calling for alerts, prompts, and confirms as easily as if you are using the browser's native implementations.** Let's first look at the old way.

### Using sweetalert with callbacks (the old way)
```js
// call an alert using the shorter syntax
swal('Oops!', 'There was a problem.', 'error');

// call a confirm dialog
swal({
  title: 'Be careful!',
  text: 'Are you sure that you want to continue?',
  type: 'warning',
  showCancelButton: true
}, confirmed => {
  // asynchronously handle the response
});

// call a prompt dialog
swal({
  title: 'Name?',
  text: 'Please enter your name.',
  type: 'input',
  showCancelButton: true
}, res => {
  // asynchronously handle the response
});

```

### Using sweetalert with promises (a slightly-better way)
```js
// import promise-alert
import { promiseAlert } from 'promise-alert';

// call an alert using the shorter syntax
promiseAlert('Oops!', 'There was a problem.', 'error').then(() => {
  // asynchronously handle the response
});

// call a confirm dialog
promiseAlert({
  title: 'Be careful!',
  text: 'Are you sure that you want to continue?',
  type: 'warning',
  showCancelButton: true
}).then(confirmed => {
  // asynchronously handle the response
});

// call a prompt dialog
promiseAlert({
  title: 'Name?',
  text: 'Please enter your name.',
  type: 'input',
  showCancelButton: true
}).then(res => {
  // asynchronously handle the response
});
```

### Using sweetalert with generators (the best way!)
```js
// import the co library to run the generator
import co from `co`;

// import promise-alert
import { promiseAlert } from 'promise-alert';

co(function* () {

  // call a prompt dialog
  const name = yield promiseAlert({
    title: 'Name?',
    text: 'Please enter your name.',
    type: 'input',
    showCancelButton: true,
    closeOnConfirm: false
  });
  
  // handle the response
  if(!name) return;
  
  // call a confirm dialog
  const confirmed = yield promiseAlert({
    title: 'Are you sure?',
    text: 'Your name is about to be alerted to the screen. Do you want to continue?',
    type: 'warning',
    showCancelButton: true,
    closeOnConfirm: false
  });
  
  // handle the response
  if(!confirmed) return;
  
  // call an alert
  yield promiseAlert('Yay!', `Your name is ${name}`, 'success');

  // all done!

});

```

### Why?
Looking at the callback and promise examples, you can see that they are called asynchronously and the only way you could call them one after the other would be to nest them inside each other. Using generators with `promiseAlert` you can once again write synchronous-looking procedural code which takes in user input without deeply-nested callbacks or promises.

### Contributions
Contributions are welcome! If you have any issues and/or contributions you would like to make, feel free to file an issue and/or issue a pull reuqest.

###License
Apache License Version 2.0

Copyright (c) 2016 by Ryan Burgett.
