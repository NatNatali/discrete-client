import client from './client';

export const getProfileApi = ({ params }, cancelToken) => (
  client.post('/auth/sign-in', params, { cancelToken })
);

export const signUpApi = ({ params }, cancelToken) => (
  client.post('/users/sign-up', params, { cancelToken })
);
