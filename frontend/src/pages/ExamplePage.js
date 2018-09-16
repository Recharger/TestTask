import React from 'react';
import ExamplePageContainer from '../containers/ExamplePageContainer';
import MenuAppBar from '../components/AppBarComponent';

const ExamplePage = () => (
  <div>
    <MenuAppBar /> 
    <ExamplePageContainer />
  </div>
);

export default ExamplePage;
