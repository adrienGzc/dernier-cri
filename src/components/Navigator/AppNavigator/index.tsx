import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { GalleryScreen } from '@dernierCri/screens';

type AppStackParamList = {
  Gallery: undefined;
  Detail: undefined;
};

const AppStackNavigator = () => {
  const AppStack = createStackNavigator<AppStackParamList>();

  return (
    <AppStack.Navigator
      initialRouteName="Gallery"
      screenOptions={{ headerShown: false }}
    >
      <AppStack.Screen component={GalleryScreen} name="Gallery" />
      {/* <AppStack.Screen component={} name="Detail" */}
    </AppStack.Navigator>
  );
};

export type { AppStackParamList };
export default AppStackNavigator;
