import { Dimensions, ImageStyle, StyleSheet, ViewStyle } from 'react-native';

import { colors, spacing } from '@dernierCri/constants';

interface GalleryScreenStyle {
  mainContainer: ViewStyle;
  image: ImageStyle;
  detailsContainer: ViewStyle;
}

export default StyleSheet.create<GalleryScreenStyle>({
  mainContainer: {
    backgroundColor: colors.WHITE,
  },
  image: {
    width: Dimensions.get('screen').width,
    height: 300,
    ...spacing.mgb4,
  },
  detailsContainer: {
    backgroundColor: colors.WHITE,
  },
});
