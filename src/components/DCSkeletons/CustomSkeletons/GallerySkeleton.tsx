import React from 'react';

import SkeletonContainer, { SkeletonRect } from '../../SkeletonContainer';

const GallerySkeleton = () => (
  <SkeletonContainer
    backgroundColor="#e5e5e5"
    foregroundColor="white"
    height={900}
    speed={1}
    viewBox="0 0 400 900"
    width={400}
  >
    <SkeletonRect height="300" rx="3" ry="3" width="380" x="0" y="0" />
    <SkeletonRect height="300" rx="3" ry="3" width="380" x="0" y="320" />
    <SkeletonRect height="300" rx="3" ry="3" width="380" x="0" y="640" />
  </SkeletonContainer>
);

export default GallerySkeleton;
