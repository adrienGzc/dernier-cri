/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Dimensions, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { AppStackParamList } from '@dernierCri/components/Navigator/types';

import { Dispatch, RootState } from '@dernierCri/services/store';

interface DetailScreenProps extends StateProps, DispatchProps {
  navigation: StackNavigationProp<AppStackParamList, 'Detail'>;
  route: RouteProp<AppStackParamList, 'Detail'>;
}

const DetailScreen = ({
  navigation,
  route,
  listPhotos,
  getPhotoStat,
}: DetailScreenProps) => {
  const { idPhoto } = route.params;
  const [photoDetail, setPhotoDetail] = useState(undefined);

  useEffect(() => {
    const getStat = async () => {
      await getPhotoStat({ id: idPhoto });
    };
    getStat();

    const pictureDetails = listPhotos.find(
      (photo: any) => photo.id === idPhoto,
    );

    if (pictureDetails) {
      setPhotoDetail(pictureDetails);
    } else {
      navigation.navigate('Gallery', { error: 'Photo not found' });
    }
    return () => {
      setPhotoDetail(undefined);
    };
  }, []);

  console.log('DETAIL: ', photoDetail);
  if (!photoDetail) return null;
  return (
    <ScrollView>
      <Image
        resizeMethod="resize"
        resizeMode="cover"
        source={{ uri: photoDetail.urls.regular }}
        style={{
          width: Dimensions.get('screen').width,
          height: 300,
        }}
      />
    </ScrollView>
  );
};

const mapState = (state: RootState) => ({
  listPhotos: state.unsplash.listPhotos,
});
type StateProps = ReturnType<typeof mapState>;

const mapDispatch = (dispatch: Dispatch) => ({
  getPhotoStat: dispatch.unsplash.getPhotoStatistics,
});
type DispatchProps = ReturnType<typeof mapDispatch>;

export default connect(mapState, mapDispatch)(DetailScreen);
