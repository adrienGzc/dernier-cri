import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { DashboardScreen } from '@dernierCri/screens';

type AppStackParamList = {
  Dashboard: undefined;
  Detail: undefined;
};

const AppStackNavigator = () => {
  const AppStack = createStackNavigator<AppStackParamList>();

  return (
    <AppStack.Navigator initialRouteName="Dashboard">
      <AppStack.Screen component={DashboardScreen} name="Dashboard" />
      {/* <AppStack.Screen component={} name="Detail" */}
    </AppStack.Navigator>
  );
};

export type { AppStackParamList };
export default AppStackNavigator;
