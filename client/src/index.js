import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './context/AuthContext';

import * as serviceWorker from './serviceWorker';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import App from './pages/App';
import ResultPage from './pages/ResultPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import NewListingPage from './pages/NewListingPage';
import ListingPage from './pages/ListingPage';
import TenantInfoPage from './pages/TenantInfoPage';
import Signuppage from './pages/Signuppage';
import TenantDashboardPage from './pages/TenantDashboardPage';
import TenantRequests from './pages/TenantRequests';
const routing = (
  <AuthProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/houses' component={ResultPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/tenant-dash' component={TenantDashboardPage} />
        <Route path='/tenant-info' component={TenantInfoPage} />
        <Route path='/new-listing' component={NewListingPage} />
        <Route path='/list/:id' component={ListingPage} />
        <Route path='/signup' component={Signuppage} />
        <Route path='/TenantRequests' component={TenantRequests} />
      </Switch>
    </BrowserRouter>
  </AuthProvider>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
