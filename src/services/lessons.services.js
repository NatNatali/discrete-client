import client from './client';

export const createLessonApi = ({ params }, cancelToken) => (
  client.post('/lessons/lesson', params, { cancelToken })
);

export const getSingleLessonApi = ({ params }, cancelToken) => (
  client.get('/lessons/lesson', { params: {
    lectureId: params.id,
  },
  cancelToken })
);

export const getAllLessonsApi = ({ params }, cancelToken) => (
  client.get('/lessons/get-all-lessons', { params, cancelToken })
);
