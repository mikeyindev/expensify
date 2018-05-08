import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// Need to set up loaders in webpack to load CSS
import './styles/styles.scss';
// When importing from node_modules directory, no need to specify path. Normalize.css is used for CSS reset
import 'normalize.css/normalize.css';

const ExpenseDashboardPage = () => (
  <div>
    This is my dashboard component
  </div>
);

const AddExpensePage = () => (
  <div>
    This is my add expense component
  </div>
);

const EditExpensePage = () => <div>This is my edit expense component</div>;
const HelpPage = () => <div>This is my help component</div>;
const NotFoundPage = () => <div>404</div>;

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));