import client from './client';

export const getSectionsApi = ({ params }, cancelToken) => (
  client.get('/sections/get-sections', { params, cancelToken })
);

export const createSectionApi = ({ params }, cancelToken) => (
  client.post('/sections/create-section', params, { cancelToken })
);
