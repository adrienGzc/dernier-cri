/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { AppStackParamList } from '@dernierCri/components/Navigator/types';

import { RootState } from '@dernierCri/services/store';

import { DCStatusBar, InfoTable } from '@dernierCri/components';

import config from './configInfoTable';
import styles from './styles';

interface DetailScreenProps extends StateProps {
  navigation: StackNavigationProp<AppStackParamList, 'Detail'>;
  route: RouteProp<AppStackParamList, 'Detail'>;
}

const DetailScreen = ({ navigation, route, listPhotos }: DetailScreenProps) => {
  const { idPhoto } = route.params;
  const [photoDetail, setPhotoDetail] = useState({});

  useEffect(() => {
    const pictureDetails = listPhotos.find(
      (photo: any) => photo.id === idPhoto,
    );

    if (pictureDetails) {
      setPhotoDetail(pictureDetails);
    } else {
      navigation.navigate('Gallery', { error: 'Photo not found' });
    }
    return () => {
      setPhotoDetail({});
    };
  }, []);

  if (!Object.keys(photoDetail).length) return <View />;

  return (
    <>
      <DCStatusBar />
      <ScrollView style={styles.mainContainer}>
        <Image
          resizeMethod="resize"
          resizeMode="cover"
          source={{ uri: photoDetail.urls.regular }}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          {Object.keys(photoDetail).length && (
            <InfoTable config={config(photoDetail)} />
          )}
        </View>
      </ScrollView>
    </>
  );
};

const mapState = (state: RootState) => ({
  listPhotos: state.unsplash.listPhotos,
});
type StateProps = ReturnType<typeof mapState>;

export default connect(mapState)(DetailScreen);
