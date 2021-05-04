import { useEffect, Fragment } from 'react';
import { Collapse } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../Container';
import Breadcrumb from '../../Shared/Breadcrumb';
import Button from '../../Shared/Button';
import Text from '../../Shared/Text';
import { isAdmin } from '../../selectors/profile.selectors';
import { allLessonSelector } from '../../selectors/lessons.selectors';
import { getAllLessonsAction } from '../../actions/lessons.actions';
import './index.scss';

const { Panel } = Collapse;
const breadcrumbItems = [
  {
    name: 'Գլխավոր էջ',
    link: '/'
  }, {
    name: 'Դաս',
  }
];

const Lesson = () => {
  const dispatch = useDispatch();
  const isAdminType = useSelector(isAdmin);
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllLessonsAction.request());
  }, [dispatch]);

  const collapseOnChange = (key) => {
    console.log(key);
  };

  const allLessons = useSelector(allLessonSelector);

  return (
    <Container>
      <div className='lesson-header'>
        <Breadcrumb breadcrumbItems={breadcrumbItems} />
        {isAdminType && (
          <div className='add-lesson-btn'>
            <Button onClick={() => history.push('/create-test')}>
              <Text level='3'>
                Ավելացնել Թեստ
              </Text>
            </Button>
            <Button onClick={() => history.push('/admin')}>
              <Text level='3'>
                Ավելացնել Դաս
              </Text>
            </Button>
          </div>
        )}
      </div>
      <Collapse onChange={collapseOnChange}>
        {
          allLessons?.map((chapter) => (
            <Panel header={chapter.title} key={chapter.id}>
              <Collapse>
                {
                  chapter.sections?.map((section) => (
                    <Panel header={section.title} key={section.id}>
                      {
                        section.lessons?.map((lesson) => (
                          <Fragment key={lesson.id}>
                            <p
                              className='lecture'
                              dangerouslySetInnerHTML={{
                                __html: lesson.lecture
                              }}
                            />
                            <div className='lesson-links'>
                              <button
                                className='read-more'
                                onClick={() => history.push(`/lesson/${chapter.id}/lecture/${lesson.id}`)}
                              >
                                Կարդալ Ավելին
                              </button>
                              <Link to={`/section/${section.id}/test`}>
                                ԹԵՍՏ
                              </Link>
                            </div>
                          </Fragment>
                        ))
                      }
                    </Panel>
                  ))
                }
              </Collapse>
            </Panel>
          ))
        }
      </Collapse>
    </Container>
  );
};

export default Lesson;
