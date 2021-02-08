import sessionModel from './sessionModel';
import { RootModel } from './types';
import unsplashServiceModel from './unsplashModel';

const models: RootModel = {
  session: sessionModel,
  unsplash: unsplashServiceModel,
};

export default models;
