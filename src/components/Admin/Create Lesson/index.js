import { useState } from 'react';
import JoditEditor from 'jodit-react';
import { useDispatch } from 'react-redux';
import Button from '../../../Shared/Button';
import Text from '../../../Shared/Text';
import Container from '../../Container';
import Breadcrumb from '../../../Shared/Breadcrumb';
import Input from '../../../Shared/Input';
import './index.scss';
import { createLessonAction } from '../../../actions/lessons.actions';

const CreateLesson = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');

  const onCreateLesson = content => {
    if (content){
      dispatch(createLessonAction.request({ lecture: content }));
    }
  };

  const breadcrumbItems = [
    {
      name: 'Գլխավոր էջ',
      link: '/'
    }, {
      name: 'Ստեղծել Դաս',
    }
  ];

  return (
    <Container>
      <Breadcrumb breadcrumbItems={breadcrumbItems} />
      <div className='create-lesson'>
        <Text level={1}>Ստեղծել Դաս</Text>
        <Input
          type='text'
          label={<Text level='4'>Վերնագիր</Text>}
          variant='filled'
        />
        <JoditEditor
          value={content}
          onChange={value => {
            setContent(value);
          }}
          tabIndex={1} // tabIndex of textarea
        />
        <Button onClick={() => {onCreateLesson(content);}}><Text level='1'>Ստեղծել</Text></Button>
      </div>
    </Container>
  );
};

export default CreateLesson;
