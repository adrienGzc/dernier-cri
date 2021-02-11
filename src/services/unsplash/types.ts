import { Moment } from 'moment';

export type GetPhotosPayloadType = {
  page: number;
  perPage: number;
  orderBy: string;
};

export type GetPhotoDetailsPayloadType = {
  id: string;
};

export type PhotoDetail = {
  id: string;
  createdAt: Moment;
  width: string;
  height: string;
  color: string;
  description: string;
  location: {
    city: string;
    country: string;
  };
  user: {
    name: string;
  };
};

export type PhotoStats = {
  id: string;
  downloads: {
    total: number;
    historic: number;
  };
  views: {
    total: number;
    historic: number;
  };
  likes: {
    total: number;
    historic: number;
  };
};
