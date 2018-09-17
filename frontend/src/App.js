import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppPage from './pages/AppPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ReduxService from './services/ReduxService';

const App = () => (
  <Provider store={ReduxService.store}>
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/" component={AppPage} />
        </Switch>
      </BrowserRouter>
    </div>
  </Provider>
);

export default App;
