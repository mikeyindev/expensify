# Expensify It
## *Your expenses on track*

This project uses React, Redux, and Firebase to build an expense tracker.

**Click [here](https://expensify-it.herokuapp.com/) to see the app in action!**

Babel configurations can be found in `.babelrc`

Webpack configurations can be found in `webpack.config.js`.


# Dependencies

[Babel](https://babeljs.io/) - JavaScript transpiler that converts ES6 to plain vanilla JavaScript.

[babel-eslint](https://github.com/babel/babel-eslint) - Lints Babel code not supported by ESLint.

[babel-polyfill](https://babeljs.io/docs/en/babel-polyfill.html) - Provides polyfills necessary for a full ES2015+ environment on different browsers.

[babel-preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env) - Babel preset that transpiles ES2015+ down to ES5. Automatically determines the Babel plugins and polyfills you need based on targeted browser or runtime.

[babel-preset-react](https://babeljs.io/docs/plugins/preset-react/) - Babel preset that transforms JSX into createElement calls.

[cross-env](https://github.com/kentcdodds/cross-env) - Cross-operating system environment scripts. Windows command prompts can't parse `NODE_ENV=production` due to a difference between how Windows and POSIX handle `env` variables.

[dotenv](https://github.com/motdotla/dotenv) = Loads environment variables from `.env` file into `process.env`. This allows storing environment configurations separate from the code.

[Express](https://expressjs.com/) - Minimal Node.js framework.

[Firebase](https://firebase.google.com/) - Real-time NoSQL database that lets you store and sync JSON data in real-time between users. 

[history](https://www.npmjs.com/package/history) - JavaScript Library that lets you manage session history anywhere inside your code, i.e. outside the context of a React component. 

[moment](https://momentjs.com/) - Parse, validate, manipulate, and display dates in JavaScript.

[normalize.css](http://necolas.github.io/normalize.css/) - Renders elements consistently across browsers.

[Numeral.js](http://numeraljs.com/) - Library for formatting and manipulating numbers.

[React](https://reactjs.org/) - Webpack plugin for Babel.

[ReactDOM](https://reactjs.org/docs/react-dom.html) - Provides DOM-specific methods and renders React components.

[react-addons-shallow-compare](https://www.npmjs.com/package/react-addons-shallow-compare) - Performs shallow equality check on `props` and `nextProps` objects as well as `state` and `nextState` objects.

[react-dates](https://github.com/airbnb/react-dates) - Requires `moment` and `react-addons-shallow-compare` as peer dependencies even though `react-addons-shallow-compare` is deprecated.

[react-redux](https://github.com/reduxjs/react-redux) - React bindings for Redux. They are not included in Redus by default.

[react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) - DOM bindings for [React Router](https://reacttraining.com/react-router/).

[react-thunk](https://github.com/reduxjs/redux-thunk) - Thunk middleware for Redux which allows you to write action generators that return a function instead of an action, i.e. a function that performs an asynchronous dispatch or dispatch an action only if certain conditions are met.

[Redux](https://redux.js.org/)

[Redux DevTools extension](https://github.com/zalmoxisus/redux-devtools-extension) - Install Redux DevTools browser extension.

[redux-mock-store](https://github.com/dmitry-zaets/redux-mock-store) - A mock store for testing Redux asynchronous action generators and middleware.

[uuid](https://www.npmjs.com/package/uuid) - Generates RFC-compliant universally unique identifier.

[Webpack](https://webpack.js.org/concepts/) - JavaScript module bundler and task runner. Can also be used to transform and package just about any asset. Emits a single file `bundle.js`.

[Webpack DevServer](https://webpack.js.org/configuration/dev-server/) - A developvement server using Webpack that provides live reloading.


# Webpack Plugins

[babel-loader](https://github.com/babel/babel-loader) - Transpiles JS files using Babel and Webpack.

[babel-plugin-transform-class-properties](https://babeljs.io/docs/plugins/transform-class-properties/) - Babel plugin for transforming class properties so there is no longer need to bind the `this` context with `this.someHandler = this.someHandler.bind(this);`. Current class syntax for JavaScript only allows you to define methods inside the class but not properties. This plugin enables properties.

[css-loader](https://github.com/webpack-contrib/css-loader) - Resolves `@import` statements like `import/require()`.

[mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) - Used to extract CSS from bundle into a separate CSS file.

[node-sass](https://github.com/sass/node-sass) - Provides Node binding to LibSass, the CSS preprocessor written in C. 

[sass-loader](https://github.com/webpack-contrib/sass-loader) - Compiles SASS into CSS using `node-sass`. Requires `node-sass` and `webpack` as peer dependencies.


## Test frameworks

[Enzyme](http://airbnb.io/enzyme/) - JavaScript testing utility that mimicks jQuery's API for DOM manipulation and traversal. Requires `enzyme-adapter-react-16`. There are different Enzyme adapters for different versions of React. Also requires `raf` polyfill.

[enzyme-to-json](https://github.com/adriantoine/enzyme-to-json) - Converts Enzyme wrappers to a format compatible with Jest snapshot testing.

[Jest](https://facebook.github.io/jest/) - See `jest.config.json` for the custom configurations made.

[raf](https://github.com/chrisdickinson/raf) - requestAnimationFrame polyfill library for node and the browser required by the React and Jest test environment.

Learn more about [snapshot testing](https://facebook.github.io/jest/docs/en/snapshot-testing.html) of components with Enzyme and Jest is similar to taking a screenshot of a rendered UI component then compare it to a reference image stored for testing purposes. The test fails if two images do not match. 


## Instructions
`npm run dev-server` to run `webpack-dev-server`.

`npm run build:prod` to run production build.
`npm run build:dev` to run development build.

`npm test` to run tests.