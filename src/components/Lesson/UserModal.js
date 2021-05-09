import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';
import { getLessonUsersAction } from '../../actions/lessons.actions';
import { lessonUsersSelector } from '../../selectors/lessons.selectors';
import Text from '../../Shared/Text';

const UserModal = ({ setVisible, sectionId }) => {
  const dispatch = useDispatch();
  const lessonUsers = useSelector(lessonUsersSelector);

  useEffect(() => {
    dispatch(getLessonUsersAction.request({ sectionId }));
  }, [dispatch, sectionId]);

  return (
    <Modal
      closable
      onCancel={() => setVisible(false)}
      visible
      className='user-lesson-modal'
      footer={false}
    >
      <div>
        {lessonUsers?.map((value, index) => (
          <div key={index}>
            <Text>
              {index + 1}. {value.first_name}{' '}{value.last_name}
            </Text>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default UserModal;
