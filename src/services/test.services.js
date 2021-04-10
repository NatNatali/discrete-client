import client from './client';

export const getSectionTestsApi = ({ params }, cancelToken) => (
  client.get('/test/get-tests', { params, cancelToken })
);

export const createTestApi = ({ params }, cancelToken) => (
  client.post('/test/create-test', params, { cancelToken })
);

export const submitTestApi = ({ params }, cancelToken) => (
  client.post('/test/submit-test', params, { cancelToken })
);
