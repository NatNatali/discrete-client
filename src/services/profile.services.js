import client from './client';

export const getProfileApi = ({ params }, cancelToken) => (
  client.post('/auth/sign-in', params, { cancelToken })
);
