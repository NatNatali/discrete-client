import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import VisibilitySensor from 'react-visibility-sensor';
import { userProfile } from '../../selectors/profile.selectors';
import { getSingleLessonAction, passLessonAction } from '../../actions/lessons.actions';
import { singleLessonSelector } from '../../selectors/lessons.selectors';
import Container from '../Container';
import Breadcrumb from '../../Shared/Breadcrumb';
import './index.scss';

const SingleLesson = () => {
  const dispatch = useDispatch();
  const lecture = useSelector(singleLessonSelector);
  const profile = useSelector(userProfile);
  let { sectionId, lectureId } = useParams();

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

  const passLesson = (isVisible) => {
    if (isVisible) {
      dispatch(passLessonAction.request({
        userId: profile.number,
        lessonId: lectureId,
      }));
    }
  };

  useEffect(() => {
    dispatch(getSingleLessonAction.request({ id: sectionId }));
  }, [sectionId, dispatch]);

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
      <VisibilitySensor
        onChange={passLesson}
      >
        <div style={{ height: '10px' }} />
      </VisibilitySensor>
    </Container>
  );
};

export default SingleLesson;
