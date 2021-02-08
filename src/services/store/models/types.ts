import { Models } from '@rematch/core';

import type { SessionModelType } from './sessionModel';
import type { UnsplashModelType } from './unsplashModel';

export interface RootModel extends Models<RootModel> {
  session: SessionModelType;
  unsplash: UnsplashModelType;
}

export type UnsplashReturnPromise = {
  success: boolean;
  message: string;
};
