import genericCall from '@dernierCri/services/genericCall';

import * as types from './types';

const getListPhotos = async ({
  page,
  perPage,
  orderBy,
}: types.GetPhotosPayloadType) =>
  genericCall({
    service: 'unsplash',
    route: '/photos',
    method: 'GET',
    params: {
      page,
      per_page: perPage,
      order_by: orderBy,
    },
  });

const getPhotoDetails = async ({ id }: types.GetPhotoDetailsPayloadType) =>
  genericCall({
    service: 'unsplash',
    route: `/photos/${id}`,
    method: 'GET',
  });

export { getListPhotos, getPhotoDetails };
