export type PayloadType = {
  service: string;
  route: string;
  method: string;
  params?: object;
};

export type HeaderType = {
  [index: string]: any;
  'Accept-Version': string;
  'Content-Type': string;
  Authorization?: string;
};
