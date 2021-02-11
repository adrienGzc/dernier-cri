import React from 'react';

import SkeletonContainer, { SkeletonRect } from '../../SkeletonContainer';

const DetailSkeleton = () => (
  <SkeletonContainer
    backgroundColor="#e5e5e5"
    foregroundColor="white"
    height={550}
    speed={1}
    viewBox="0 0 380 550"
    width={380}
  >
    <SkeletonRect height="300" rx="3" ry="3" width="300" x="25" y="220" />
    <SkeletonRect height="300" rx="3" ry="3" width="300" x="25" y="220" />
    <SkeletonRect height="300" rx="3" ry="3" width="300" x="25" y="220" />

    <SkeletonRect height="25" rx="2" ry="2" width="200" x="25" y="20" />
    <SkeletonRect height="120" rx="3" ry="3" width="350" x="25" y="55" />
    <SkeletonRect height="25" rx="2" ry="2" width="200" x="25" y="220" />
    <SkeletonRect height="120" rx="3" ry="3" width="350" x="25" y="255" />
  </SkeletonContainer>
);

export default DetailSkeleton;
