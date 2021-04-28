import client from './client';

export const getStatisticsApi = ({ params }, cancelToken) => (
  client.get('/global/get-statistics', { params, cancelToken })
);

export const addVisitCountApi = ({ params }, cancelToken) => (
  client.post('/global/add-visit', params, { cancelToken })
);
