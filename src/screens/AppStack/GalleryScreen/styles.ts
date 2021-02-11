import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { colors, spacing } from '@dernierCri/constants';

interface GalleryScreenStyle {
  container: ViewStyle;
  title: TextStyle;
  photoCardStyle: ImageStyle;
  erroContainer: ViewStyle;
  errorText: TextStyle;
}

export default StyleSheet.create<GalleryScreenStyle>({
  container: {
    flex: 1,
    ...spacing.pgh2,
    ...spacing.mgt4_5,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    ...spacing.mgb3,
  },
  photoCardStyle: {
    width: '100%',
    height: 300,
    borderRadius: 6,
    ...spacing.mgb2,
  },
  erroContainer: {
    borderWidth: 3,
    borderColor: colors.PRIMARY,
    borderRadius: 4,
    ...spacing.mgv2,
    ...spacing.pg2,
  },
  errorText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
