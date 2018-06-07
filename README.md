# Expensify
## *Your expenses on track*

This project uses React and Redux to build an expense tracker.

Babel configurations can be found in `.babelrc`

Webpack configurations can be found in `webpack.config.js`.


# Dependencies

[Babel](https://babeljs.io/) - JavaScript transpiler that converts ES6 to plain vanilla JavaScript.

[babel-eslint](https://github.com/babel/babel-eslint) - Lints Babel code not supported by ESLint.

[babel-preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env) - Babel preset that transforms ES2015+ down to ES5. Automatically determines the Babel plugins and polyfills you need based on targeted browser or runtime.

[babel-preset-react](https://babeljs.io/docs/plugins/preset-react/) - Babel preset that transforms JSX into createElement calls.

[Express](https://expressjs.com/) - Minimal Node.js framework.

[moment](https://momentjs.com/) - Parse, validate, manipulate, and display dates in JavaScript.

[normalize.css](http://necolas.github.io/normalize.css/) - Renders elements consistently across browsers.

[React](https://reactjs.org/) - Webpack plugin for Babel.

[ReactDOM](https://reactjs.org/docs/react-dom.html) - Provides DOM-specific methods and renders React components.

[Redux](https://redux.js.org/)

[react-redux](https://github.com/reduxjs/react-redux) - React bindings for Redux. They are not included in Redus by default.

[react-addons-shallow-compare](https://www.npmjs.com/package/react-addons-shallow-compare) - Performs shallow equality check on `props` and `nextProps` objects as well as `state` and `nextState` objects.

[react-dates](https://github.com/airbnb/react-dates) - Requires `moment` and `react-addons-shallow-compare` as peer dependencies even though `react-addons-shallow-compare` is deprecated.

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