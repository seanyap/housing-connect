import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import App from "./pages/App";
import ResultPage from "./pages/ResultPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import NewListingPage from "./pages/NewListingPage";
import ListingPage from "./pages/ListingPage";

const routing = (
  <>
    <BrowserRouter>
      <Link to="/">
        <NavBar isLoggedIn={false} />
      </Link>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/houses" component={ResultPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/new-listing" component={NewListingPage} />
        <Route path="/list/:id" component={ListingPage} />
      </Switch>
    </BrowserRouter>
  </>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
