import { createModel, RematchDispatch } from '@rematch/core';

import * as unsplashService from '@dernierCri/services/unsplash';
import {
  formatGetPhoto,
  formatGetPhotoStats,
} from '@dernierCri/services/unsplash/formatter';
import * as unsplashTypes from '@dernierCri/services/unsplash/types';

import { RootModel } from './types';

type UnsplashState = {
  listPhotos: Array<any>;
};

const INITIAL_STATE: UnsplashState = {
  listPhotos: [],
};

const unsplashModel = createModel<RootModel>()({
  state: INITIAL_STATE,
  reducers: {
    setListPhotos: (state, payload) => ({ ...state, listPhotos: payload }),
    updatePhoto: (state, payload) => {
      const { listPhotos } = state;
      const { id } = payload;
      const photoElemIndex = listPhotos.findIndex(
        (elem: any) => elem.id === id,
      );

      if (photoElemIndex !== -1) {
        const newPhotoElem = {
          ...state.listPhotos[photoElemIndex],
          ...payload,
        };
        return {
          ...state,
          listPhotos: [
            ...state.listPhotos.slice(0, photoElemIndex),
            newPhotoElem,
            ...state.listPhotos.slice(photoElemIndex + 1),
          ],
        };
      }
      return { ...state };
    },
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
    getPhoto: async (payload: unsplashTypes.GetPhotoDetailsPayloadType) => {
      const { unsplash } = dispatch;
      const { id } = payload;

      try {
        const response = await unsplash.call({
          api: unsplashService.getPhotoDetails({
            id,
          }),
        });

        if (response && response.success === false) {
          return {
            success: false,
            message: 'Request failed.',
          };
        }
        unsplash.updatePhoto(formatGetPhoto(response));
        return { success: true, message: 'Success' };
      } catch (error) {
        return {
          success: false,
          message: 'Server error or bad request.',
        };
      }
    },
    getPhotoStatistics: async (
      payload: unsplashTypes.GetPhotoDetailsPayloadType,
    ) => {
      const { unsplash } = dispatch;
      const { id } = payload;

      try {
        const response = await unsplash.call({
          api: unsplashService.getPhotoStatistics({
            id,
          }),
        });

        if (response && response.success === false) {
          return {
            success: false,
            message: 'Request failed.',
          };
        }
        unsplash.updatePhoto(formatGetPhotoStats(response));
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
