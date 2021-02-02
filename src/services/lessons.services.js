import client from './client';

export const createLessonApi = ({ params }, cancelToken) => (
  client.post('/lessons/lesson', params, { cancelToken })
);

export const getSingleLessonApi = ({ params }, cancelToken) => console.log(params) || (
  client.get('/lessons/lesson', { params: {
    lectureId: params.id,
  },
  cancelToken })
);
