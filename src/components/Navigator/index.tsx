import React from 'react';
import { connect } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import { navigationRef } from '@dernierCri/services/Navigation';
import { RootState } from '@dernierCri/services/store';

import { types } from '@dernierCri/constants';
import { SplashScreen } from '@dernierCri/screens';

import AppStackNavigator from './AppNavigator';

interface NavProps extends StateProps {}

const Navigator = ({ appStatus }: NavProps) => {
  const SwitchNavigator: { [key in types.NavStatus]: React.ReactNode } = {
    SPLASH: <SplashScreen />,
    APP: <AppStackNavigator />,
  };

  const getSwitchNavigatorKey = () => {
    if (appStatus !== 'LOADED') return 'SPLASH';
    return 'APP';
  };

  const switchNavigatorKey: types.NavStatus = getSwitchNavigatorKey();

  return (
    <NavigationContainer ref={navigationRef}>
      {SwitchNavigator[switchNavigatorKey]}
    </NavigationContainer>
  );
};

const mapState = ({ session: { appStatus } }: RootState) => ({
  appStatus,
});
type StateProps = ReturnType<typeof mapState>;

export default connect(mapState)(Navigator);
