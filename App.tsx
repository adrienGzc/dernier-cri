/* eslint-disable react/style-prop-object */
import React from 'react';
import { Provider } from 'react-redux';

import { StatusBar } from 'expo-status-bar';

import Navigator from '@dernierCri/components/Navigator';

import store from '@dernierCri/services/store';

const App = () => (
  <Provider store={store}>
    <Navigator />
    <StatusBar style="auto" />
  </Provider>
);

export default App;
