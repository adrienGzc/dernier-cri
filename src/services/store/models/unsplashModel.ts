import { createModel, RematchDispatch } from '@rematch/core';

import * as unsplashService from '@dernierCri/services/unsplash';
import * as unsplashTypes from '@dernierCri/services/unsplash/types';

import { RootModel } from './types';

type UnsplashState = {
  listPhotos: [];
};

const INITIAL_STATE: UnsplashState = {
  listPhotos: [],
};

const unsplashModel = createModel<RootModel>()({
  state: INITIAL_STATE,
  reducers: {
    setListPhotos: (state, payload) => ({ ...state, listPhotos: payload }),
    reset: () => INITIAL_STATE,
  },
  effects: (dispatch: RematchDispatch) => ({
    call: async (payload: any, _root): Promise<any> => {
      const { api } = payload;

      return api
        .then((result: any) => result.data)
        .catch((error: { status: number; message: string }) => {
          const { status } = error;
          let message = '';

          switch (status) {
            case 403:
              message = 'Forbidden.';
              break;
            case 401:
              message = 'Unauthorize request.';
              break;
            default:
              break;
          }
          return { success: false, status, message };
        });
    },
    getListPhotos: async (payload: unsplashTypes.GetPhotosPayloadType) => {
      const { unsplash } = dispatch;
      const { page, perPage, orderBy } = payload;

      try {
        const response = await unsplash.call({
          api: unsplashService.getListPhotos({
            page,
            perPage,
            orderBy,
          }),
        });

        if (response && response.success === false) {
          return {
            success: false,
            message: 'Request failed.',
          };
        }
        unsplash.setListPhotos(response);
        return { success: true, message: 'Success' };
      } catch (error) {
        return {
          success: false,
          message: 'Server error or bad request.',
        };
      }
    },
  }),
});

export type UnsplashModelType = typeof unsplashModel;
export default unsplashModel;
