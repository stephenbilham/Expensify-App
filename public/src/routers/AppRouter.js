import React from "react";
import { BrowserRouter, NavLink, Link, Route, Switch } from "react-router-dom";

import AddExpensePage from "../components/AddExpensePage";
import ExpenseDashboardPage from "../components/Dashboard";
import EditExpensePage from "../components/EditExpense";
import Header from "../components/Header";
import HelpPage from "../components/HelpPage";
import NoPage from "../components/NoPage";
import LoginPage from "../components/LoginPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true}></Route>
        <Route path="/dashboard" component={ExpenseDashboardPage}></Route>
        <Route path="/create" component={AddExpensePage}></Route>
        <Route path="/edit/:id" component={EditExpensePage}></Route>
        <Route path="/help" component={HelpPage}></Route>
        <Route component={NoPage}></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
