import React from 'react';

import { Circle } from 'react-content-loader/native';

interface SkeletonCircleProps {
  cx: string;
  cy: string;
  r: string;
}
const SkeletonCircle = ({ cx, cy, r }: SkeletonCircleProps) => (
  <Circle cx={cx} cy={cy} r={r} />
);

export default React.memo(SkeletonCircle);
