import React from 'react';
import {
  Image,
  ImageProps,
  ImageStyle,
  ViewStyle,
  Pressable,
} from 'react-native';

interface PhotoCardProps {
  containerStyle?: ViewStyle;
  imageProps: ImageProps;
  imageStyle?: ImageStyle;
  onPress: () => void;
}

const PhotoCard = ({
  containerStyle,
  imageProps,
  imageStyle,
  onPress,
}: PhotoCardProps): JSX.Element => (
  <Pressable style={containerStyle} onPress={onPress}>
    <Image resizeMode="cover" style={imageStyle} {...imageProps} />
  </Pressable>
);

export default PhotoCard;
