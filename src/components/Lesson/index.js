import { useEffect, Fragment, useState } from 'react';
import { Collapse } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../Container';
import UserModal from './UserModal';
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
  const [userModalVisible, setUserModalVisible] = useState(false);
  const dispatch = useDispatch();
  const isAdminType = useSelector(isAdmin);
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllLessonsAction.request());
  }, [dispatch]);

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
      <Collapse>
        {
          allLessons?.map((chapter) => (
            <Panel header={chapter.title} key={chapter.id}>
              <Collapse>
                {
                  chapter.sections?.map((section) => (
                    <Panel
                      header={(
                        <div className='section-title'>
                          <div>
                            {section.title}
                          </div>
                          <div
                            className='section-title__students'
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setUserModalVisible(true);
                            }}
                          >
                            Ուսանողներ
                          </div>
                        </div>
                      )}
                      key={section.id}
                    >
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
                                onClick={() => history.push(`/lesson/${section.id}/lecture/${lesson.id}`)}
                              >
                                Կարդալ Ավելին
                              </button>
                              <Link to={`/section/${section.id}/test`}>
                                ԹԵՍՏ
                              </Link>
                            </div>
                            {
                              userModalVisible && (
                                <UserModal
                                  sectionId={lesson.id}
                                  setVisible={setUserModalVisible}
                                />
                              )
                            }
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
