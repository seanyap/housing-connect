import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './context/AuthContext';

import * as serviceWorker from './serviceWorker';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import App from './pages/App';
import ResultPage from './pages/ResultPage';
import DashboardPage from './pages/DashboardPage';
import NewListingPage from './pages/NewListingPage';
import ListingPage from './pages/ListingPage';
import TenantInfoPage from './pages/TenantInfoPage';
import PrivateRoute from './components/PrivateRoute';

import LoginPage from './pages/LoginPage';

const routing = (
  <AuthProvider>
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route exact path='/' component={App} />
        {/* so that the results page wont load unless the user is logged in */}
        <Route path='/houses' component={ResultPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/tenant-info' component={TenantInfoPage} />
        <Route path='/new-listing' component={NewListingPage} />
        <Route path='/list/:id' component={ListingPage} />
      </Switch>
    </BrowserRouter>
  </AuthProvider>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
