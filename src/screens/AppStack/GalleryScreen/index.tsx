import React from 'react';
import { Text, Button, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

import { Dispatch, RootState } from '@dernierCri/services/store';

interface DashboardScreenProps extends StateProps, DispatchProps {}

const DashboardScreen = ({
  listPhotos,
  getListPhotos,
}: DashboardScreenProps) => {
  const getPhotos = async () => {
    await getListPhotos({
      page: 1,
      perPage: 10,
      orderBy: 'popular',
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 16, marginTop: 32 }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Gallery</Text>
      <Button title="Fetch" onPress={getPhotos} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {listPhotos.length > 0 ? (
          listPhotos.map((photo: any) => (
            <Image
              key={photo.id}
              resizeMode="cover"
              source={{ uri: photo.urls.regular }}
              style={{ width: '100%', height: 300, borderRadius: 10, marginBottom: 32 }}
            />
          ))
        ) : (
          <Text>No photos</Text>
        )}
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
