import React from 'react';
import { StatusBar, Platform } from 'react-native';

const DCStatusBar = () => (
  <StatusBar
    barStyle={Platform.select({
      ios: 'dark-content',
      android: 'light-content',
    })}
  />
);

export default DCStatusBar;
