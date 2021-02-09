import React, { useState } from 'react';
import { Text, Button, ScrollView, RefreshControl, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { AppStackParamList } from '@dernierCri/components/Navigator/types';

import { Dispatch, RootState } from '@dernierCri/services/store';

import { PhotoCard } from '@dernierCri/components';

import styles from './styles';

interface DashboardScreenProps extends StateProps, DispatchProps {
  navigation: StackNavigationProp<AppStackParamList, 'Gallery'>;
  route: RouteProp<AppStackParamList, 'Gallery'>;
}

const DashboardScreen = ({
  navigation,
  route,
  listPhotos,
  getListPhotos,
}: DashboardScreenProps) => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const { error } = route.params;

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await getPhotos();
    setIsRefreshing(false);
  };

  const getPhotos = async () => {
    await getListPhotos({
      page: 1,
      perPage: 10,
      orderBy: 'latest',
    });
  };

  if (error) {
    setTimeout(() => navigation.setParams({ error: undefined }), 4000);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Gallery</Text>
      <Button title="Fetch" onPress={getPhotos} />
      {error && (
        <View style={styles.erroContainer}>
          <Text style={styles.errorText}>Error: photo not found</Text>
        </View>
      )}
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        {listPhotos.length > 0 &&
          listPhotos.map((photo: any) => (
            <PhotoCard
              imageProps={{
                source: {
                  uri: photo.urls.regular,
                },
              }}
              imageStyle={styles.photoCardStyle}
              key={photo.id}
              onPress={() => {
                navigation.navigate('Detail', { idPhoto: photo.id });
              }}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const mapState = (state: RootState) => ({
  listPhotos: state.unsplash.listPhotos,
});
type StateProps = ReturnType<typeof mapState>;

const mapDispatch = (dispatch: Dispatch) => ({
  getListPhotos: dispatch.unsplash.getListPhotos,
});
type DispatchProps = ReturnType<typeof mapDispatch>;

export default connect(mapState, mapDispatch)(DashboardScreen);
