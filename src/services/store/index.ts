import AsyncStorage from '@react-native-async-storage/async-storage';
import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import createRematchPersist from '@rematch/persist';

import models from './models';
import { RootModel } from './models/types';

const persistPlugin = createRematchPersist({
  key: 'root',
  whitelist: ['unsplash'],
  storage: AsyncStorage,
});

const store = init({
  models,
  plugins: [persistPlugin],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;

export default store;
