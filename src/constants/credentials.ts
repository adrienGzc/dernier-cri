type ServiceType = {
  apiUrl: string;
  accessKey: string;
  secretKey?: string;
};

type CredType = {
  [index: string]: ServiceType;
  unsplash: ServiceType;
};

const credentials: CredType = {
  unsplash: {
    apiUrl: 'https://api.unsplash.com/',
    accessKey: 'qoDvR4_sYQT_FojckS3FLCvv7eIL0ukpQU2yq3T0abw',
    secretKey: 'uFP3mrsjnztSMGTtnpl5FjBfuoKuZ_FXChb9u1dkZRg',
  },
};

export type CredentialsType = typeof credentials;
export default credentials;
