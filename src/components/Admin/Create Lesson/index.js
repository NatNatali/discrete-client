import { useState } from 'react';
import JoditEditor from 'jodit-react';
import axios from 'axios';
import { Modal } from 'antd';
import Button from '../../../Shared/Button';
import Text from '../../../Shared/Text';
import Container from '../../Container';
import Breadcrumb from '../../../Shared/Breadcrumb';
import { useHistory } from 'react-router-dom';
import Input from '../../../Shared/Input';
import './index.scss';

const CreateLesson = () => {
  let history = useHistory();
  const [content, setContent] = useState('');

  const info = () => {
    Modal.info({
      title: 'Դասը ավելացվել է',
      content: 'Դասը հաջողությամբ ավելացվել է',
      okText: 'Տեսնել Դասը',
      onOk: () => {
        history.push('/lesson');
      },
      closable: true,
      centered: true
    });
  };

  const onCreateLesson = content => {
    if (content){
      axios.post('http://localhost:3030/lessons/lesson', { lecture: content }).then(res => {
        console.log('res', res);
        info();
      });
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

  console.log(content);

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
