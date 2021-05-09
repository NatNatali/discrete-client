import client from './client';

export const createLessonApi = ({ params }, cancelToken) => (
  client.post('/lessons/lesson', params, { cancelToken })
);

export const getSingleLessonApi = ({ params }, cancelToken) => (
  client.get('/lessons/lesson', { params: {
    sectionId: params.id,
  },
  cancelToken })
);

export const getAllLessonsApi = ({ params }, cancelToken) => (
  client.get('/lessons/get-all-lessons', { params, cancelToken })
);

export const getLessonUsersApi = ({ params }, cancelToken) => (
  client.get('/lessons/get-lesson-users', { params, cancelToken })
);

export const passLessonApi = ({ params }, cancelToken) => (
  client.post('/lessons/pass-lesson', params, { cancelToken })
);
