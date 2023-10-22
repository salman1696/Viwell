import { HTTP_CLIENT } from './config/config';

export const getProfile = (params: any) => {
  return HTTP_CLIENT.get('/user/' + params?.id);
};
