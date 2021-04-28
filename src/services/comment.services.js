import client from './client';

export const addCommentApi = ({ params }, cancelToken) => (
  client.post('/comment/create-comment', params, { cancelToken })
);

export const getCommentsApi = ({ params }, cancelToken) => (
  client.get('/comment/get-comments', { params, cancelToken })
);
