# Expensify

## Your expenses on track

This project uses React and Redux to build an expense tracker.

Babel configurations can be found in `.babelrc`

Webpack configurations can be found in `webpack.config.js`.

# Dependencies
[React](https://reactjs.org/) - Webpack plugin for Babel.

[ReactDOM](https://reactjs.org/docs/react-dom.html) - Provides DOM-specific methods and renders React components.

[Redux](https://redux.js.org/)

[react-redux](https://github.com/reduxjs/react-redux) - React bindings for Redux. They are not included in Redus by default.

[uuid](https://www.npmjs.com/package/uuid) - Generates RFC-compliant universally unique identifier.

[moment](https://momentjs.com/) - Parse, validate, manipulate, and display dates in JavaScript.

[react-addons-shallow-compare](https://www.npmjs.com/package/react-addons-shallow-compare) - Performs shallow equality check on `props` and `nextProps` objects as well as `state` and `nextState` objects.

[react-dates](https://github.com/airbnb/react-dates) - Requires `moment` and `react-addons-shallow-compare` as peer dependencies even though `react-addons-shallow-comopare` is deprecated.

[normalize.css](http://necolas.github.io/normalize.css/) - Renders elements consistently across browsers.

[Babel](https://babeljs.io/) - JavaScript transpiler that converts ES6 to plain vanilla JavaScript.

[babel-eslint](https://github.com/babel/babel-eslint) - Lints Babel code not supported by ESLint.

[babel-preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env) - Babel preset that transforms ES2015+ down to ES5. Automatically determines the Babel plugins and polyfills you need based on targeted browser or runtime.

[babel-preset-react](https://babeljs.io/docs/plugins/preset-react/) - Babel preset that transforms JSX into createElement calls.

[Webpack](https://webpack.js.org/concepts/) - JavaScript module bundler and task runner. Can also be used to transform and package just about any asset. Emits a single file `bundle.js`.

[Webpack DevServer](https://webpack.js.org/configuration/dev-server/) - A developvement server using Webpack that provides live reloading.

# Webpack Plugins
[babel-loader]()

[babel-plugin-transform-class-properties](https://babeljs.io/docs/plugins/transform-class-properties/) - Babel plugin for transforming class properties so there is no longer need to bind the `this` context with `this.someHandler = this.someHandler.bind(this);`. Current class syntax for JavaScript only allows you to define methods inside the class but not properties. This plugin enables properties.

[css-loader](https://github.com/webpack-contrib/css-loader) - Resolves `@import` statements like `import/require()`.

[node-sass](https://github.com/sass/node-sass) - Provides Node binding to LibSass, the CSS preprocessor written in C. 

[sass-loader](https://github.com/webpack-contrib/sass-loader) - Compiles SASS into CSS using `node-sass`. Requires `node-sass` and `webpack` as peer dependencies.

[style-loader](https://github.com/webpack-contrib/style-loader) - Adds CSS to DOM by injecting <style> tag to index.html.

## Instructions
`npm run dev-server` to run `webpack-dev-server`.