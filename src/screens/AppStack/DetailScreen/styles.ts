import { Dimensions, ImageStyle, StyleSheet, ViewStyle } from 'react-native';

import { spacing } from '@dernierCri/constants';

interface GalleryScreenStyle {
  image: ImageStyle;
  detailsContainer: ViewStyle;
}

export default StyleSheet.create<GalleryScreenStyle>({
  image: {
    width: Dimensions.get('screen').width,
    height: 300,
    ...spacing.mgb4,
  },
  detailsContainer: {
    ...spacing.mgh2,
  },
});
