import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { singleLessonSelector } from '../../selectors/lessons.selectors';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../Container';
import Breadcrumb from '../../Shared/Breadcrumb';
import './index.scss';
import { getSingleLessonAction } from '../../actions/lessons.actions';

const SingleLesson = () => {
  const dispatch = useDispatch();
  const lecture = useSelector(singleLessonSelector);
  let { lectureId } = useParams();

  const breadcrumbItems = [
    {
      name: 'Գլխավոր էջ',
      link: '/'
    }, {
      name: 'Դաս',
      link: '/lesson'
    }, {
      name: 'SingleLecture',
    }
  ];

  useEffect(() => {
    dispatch(getSingleLessonAction.request({ id: lectureId }));
  }, [lectureId, dispatch]);
  return (
    <Container>
      <Breadcrumb breadcrumbItems={breadcrumbItems} />
      <div className='SLcontainer'>
        <div
          dangerouslySetInnerHTML={{
            __html: lecture
          }}
        />
      </div>
    </Container>
  );
};

export default SingleLesson;
