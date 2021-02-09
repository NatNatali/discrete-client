import client from './client';

export const getChaptersApi = ({ params }, cancelToken) => (
  client.get('/chapters/get-chapters', { params, cancelToken })
);

export const createChapterApi = ({ params }, cancelToken) => (
  client.post('/chapters/create-chapter', params, { cancelToken })
);
