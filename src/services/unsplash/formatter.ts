/* eslint-disable @typescript-eslint/naming-convention */
import moment from 'moment';

import { PhotoDetail, PhotoStats } from './types';

const formatGetPhoto = (photoDetail: any): PhotoDetail => {
  const {
    id,
    created_at,
    width,
    height,
    color,
    description,
    location,
    user,
  } = photoDetail;

  return {
    id,
    createdAt: created_at || moment(),
    width,
    height,
    color,
    description: description || 'No description',
    location: {
      city: location?.city || 'No city',
      country: location?.country || 'No country',
    },
    user: {
      name: user?.name || 'Anonymousse',
    },
  };
};

const formatGetPhotoStats = (photoStats: any): PhotoStats => {
  const { id, views, downloads, likes } = photoStats;

  return {
    id,
    downloads: {
      total: downloads?.total || 0,
      historic: downloads?.historical?.change || 0,
    },
    views: {
      total: views?.total || 0,
      historic: views?.historical?.change || 0,
    },
    likes: {
      total: likes?.total || 0,
      historic: likes?.historical?.change || 0,
    },
  };
};

export { formatGetPhoto, formatGetPhotoStats };
