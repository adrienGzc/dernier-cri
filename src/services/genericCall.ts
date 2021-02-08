import { credentials } from '@dernierCri/constants';
import { queryString, parseJSON } from '@dernierCri/utils';

import { PayloadType, HeaderType } from './types';

const genericCall = async (payload: PayloadType): Promise<any> => {
  const {
    service = 'unsplash',
    route = '',
    method = 'GET',
    params = null,
  } = payload;
  const apiService = credentials[service];

  let APIRoute = `${apiService.apiUrl}${route}`;
  if (method === 'GET' && params !== null) APIRoute += queryString(params);

  const headers: HeaderType = {
    'Accept-Version': 'v1',
    'Content-Type': 'application/json',
    Authorization: `Client-ID ${apiService.accessKey}`,
  };

  const body: string | null =
    method === 'POST' || method === 'PUT' ? JSON.stringify(params) : null;

  return fetch(APIRoute, {
    method,
    headers,
    body,
  }).then((result: any) => {
    if (!result.ok) {
      return { success: false };
    }
    return { success: true, status: result.status, data: parseJSON(result) };
  });
};

export default genericCall;
