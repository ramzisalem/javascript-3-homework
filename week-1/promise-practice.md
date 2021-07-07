complete these exercises from javascript.info and paste your solutions in to this file:

- [promise basics](https://javascript.info/promise-basics#tasks)
- [promise chaining](https://javascript.info/promise-chaining#tasks)
- [promise api](https://javascript.info/promise-api)

and here's another [helpful resources](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

- Re-resolve a promise?
  What’s the output of the code below?

```js
let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);
```

- Delay with a promise

  ```js
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  delay(3000).then(() => alert('runs after 3 seconds'));
  ```

- Animated circle with promise

  ```js
  function showCircle{

    return new Promise(resolve => {
      setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';

        div.addEventListener('transitionend', function handler() {
          div.removeEventListener('transitionend', handler);
          resolve(div);
        });
      }, 0);
    })
     }

  ```
