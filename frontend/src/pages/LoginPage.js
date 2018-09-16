import React from 'react';
import LoginPageContainer from '../containers/LoginFormContainer';
import MenuAppBar from '../components/AppBarComponent';

const LoginPage = () => (
  <div>
    <MenuAppBar /> 
    <LoginPageContainer />
  </div>
);

export default LoginPage;
