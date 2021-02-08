/* eslint-disable react/style-prop-object */
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { getPersistor } from '@rematch/persist';
import { StatusBar } from 'expo-status-bar';
import { PersistGate } from 'redux-persist/es/integration/react';

import Navigator from '@dernierCri/components/Navigator';

import store from '@dernierCri/services/store';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={getPersistor()}>
      <SafeAreaProvider>
        <Navigator />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </PersistGate>
  </Provider>
);

export default App;
