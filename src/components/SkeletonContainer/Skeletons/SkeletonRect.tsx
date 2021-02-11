import React from 'react';

import { Rect } from 'react-content-loader/native';

interface SkeletonRectProps {
  height: string;
  width: string;
  rx: string;
  ry: string;
  x: string;
  y: string;
}
const SkeletonRect = ({ height, width, rx, ry, x, y }: SkeletonRectProps) => (
  <Rect height={height} rx={rx} ry={ry} width={width} x={x} y={y} />
);

export default React.memo(SkeletonRect);
