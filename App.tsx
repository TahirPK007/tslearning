import {View, Text} from 'react-native';
import React from 'react';
import AppNavigator from './comps/AppNavigator';
import {Provider} from 'react-redux';
import {store} from './reduxts/store';
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
