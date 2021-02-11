import { StyleSheet, Platform, ViewStyle, TextStyle } from 'react-native';

import { spacing, colors } from '@dernierCri/constants';

type InfoTableStyleProps = {
  sectionContainer: ViewStyle;
  titleHeader: TextStyle;
  row: ViewStyle;
  rowUpperLine: ViewStyle;
  labelCol: ViewStyle;
  contentCol: ViewStyle;
  rowLabel: TextStyle;
  rowLineDown: ViewStyle;
};

export default StyleSheet.create<InfoTableStyleProps>({
  sectionContainer: {
    ...spacing.mgv4,
  },
  titleHeader: {
    fontWeight: Platform.select({ ios: '600', android: 'bold' }),
    fontSize: 23,
    ...spacing.mgb2,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
  },
  rowUpperLine: {
    borderTopWidth: 1,
    borderTopColor: colors.GREY_ACCENT,
    borderBottomColor: colors.GREY_ACCENT,
    borderBottomWidth: 1,
  },
  rowLineDown: {
    borderBottomColor: colors.GREY_ACCENT,
    borderBottomWidth: 1,
  },
  labelCol: {
    minWidth: '45%',
  },
  contentCol: {
    flex: 1,
  },
  rowLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
});
