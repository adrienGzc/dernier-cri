import React from 'react';
import { View, Text, Button } from 'react-native';

import { credentials } from '@dernierCri/constants';

const DashboardScreen = () => {
  const getPhotos = () => {
    console.log('oups');
  };

  return (
    <View>
      <Text>Dashboard</Text>
      <Button title="Fetch" onPress={getPhotos} />
    </View>
  );
};

export default DashboardScreen;
