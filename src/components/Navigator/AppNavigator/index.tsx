import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { GalleryScreen, DetailScreen } from '@dernierCri/screens';

type AppStackParamList = {
  Gallery: { error: string | undefined };
  Detail: { idPhoto: string };
};

const AppStackNavigator = () => {
  const AppStack = createStackNavigator<AppStackParamList>();

  return (
    <AppStack.Navigator initialRouteName="Gallery">
      <AppStack.Screen
        component={GalleryScreen}
        initialParams={{
          error: undefined,
        }}
        name="Gallery"
        options={{
          headerShown: false,
        }}
      />
      <AppStack.Screen
        component={DetailScreen}
        name="Detail"
        options={{
          headerTitleAlign: 'center',
        }}
      />
    </AppStack.Navigator>
  );
};

export type { AppStackParamList };
export default AppStackNavigator;
