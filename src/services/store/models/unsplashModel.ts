import { createModel, RematchDispatch } from '@rematch/core';

import * as unsplashService from '@dernierCri/services/unsplash';
import * as unsplashTypes from '@dernierCri/services/unsplash/types';

import { RootModel } from './types';

const unsplashModel = createModel<RootModel>()({
  state: null,
  effects: (dispatch: RematchDispatch) => ({
    call: async (payload: any, _root): Promise<any> => {
      const { api } = payload;
      const { session } = dispatch;

      return api
        .then((result: any) => result.data)
        .catch((error: { status: number; message: string }) => {
          const { status } = error;
          let message = '';

          switch (status) {
            case 403:
              message = 'Error permission.';
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
    getListPhotos: async (
      _payload: unsplashTypes.GetPhotosPayloadType,
    ): Promise<{ success: boolean; message: string }> => {
      const { api } = dispatch;

      try {
        const response = await api.call({
          api: unsplashService.getListPhotos({
            page: 1,
            perPage: 10,
            orderBy: 'latest',
          }),
        });

        if (response) {
          return { success: true, message: 'Success' };
        }
        return {
          success: false,
          message: 'Oups...',
        };
      } catch (error) {
        return {
          success: false,
          message: 'Problème avec le server.',
        };
      }
    },
  }),
});

export type UnsplashModelType = typeof unsplashModel;
export default unsplashModel;
