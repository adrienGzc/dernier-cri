import React from 'react';

import ContentLoader, {
  Facebook,
  Instagram,
  List,
  BulletList,
  Code,
} from 'react-content-loader/native';

import { SkeletonCircle, SkeletonRect } from './Skeletons';

type PreloadMapProps = {
  [index: string]: JSX.Element;
};
const preloadMap: PreloadMapProps = {
  facebook: <Facebook />,
  instagram: <Instagram />,
  list: <List />,
  bulletlist: <BulletList />,
  code: <Code />,
};

interface SkeletonContainerProps {
  children: JSX.Element | JSX.Element[];
  speed?: number;
  viewBox?: string;
  width: number;
  height: number;
  backgroundColor?: string;
  foregroundColor?: string;
  preloadVariant?: 'Facebook' | 'Instagram' | 'List' | 'BulletList' | 'Code';
  forceRenderChildren?: boolean;
}
const SkeletonContainer = ({
  children,
  speed,
  viewBox,
  width,
  height,
  backgroundColor,
  foregroundColor,
  preloadVariant,
  forceRenderChildren,
}: SkeletonContainerProps) => (
  <ContentLoader
    backgroundColor={backgroundColor}
    foregroundColor={foregroundColor}
    height={height}
    speed={speed}
    viewBox={viewBox}
    width={width}
  >
    {preloadVariant !== undefined ? preloadMap[preloadVariant] : children}
    {forceRenderChildren && children}
  </ContentLoader>
);

SkeletonContainer.defaultProps = {
  speed: 1.2,
  viewBox: '0 0 400 460',
  backgroundColor: '#f3f3f3',
  foregroundColor: '#ffffff',
  preloadVariant: undefined,
  forceRenderChildren: false,
};

export { SkeletonRect, SkeletonCircle };
export default SkeletonContainer;
