# lib-first-example-jacks
> A script to detect if the user is leaving the page after some time and calls a function.

## Installing

Install the library via `npm install lib-first-example-jacks`.

## How to use

If you used npm, just import the file:

```js
import OnLeaveIntent from 'lib-first-example-jacks';
```

And now you can use it like:

```js
function callback() {
  console.log('A function to be called when user leaves the page');
}

const delay = 1000; // time in milliseconds defined to start tracking the user

const onLeaveIntent = new OnLeaveIntent(callback, delay);
```

## Testing

You can see the tests, use `npm run test` to run the tests. If you want to see an example working on the Browser, just run `npm run start`.

## Commands
- npm i

## npm commands
- npm login
- npm publish
