import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from '../Container';
import Breadcrumb from '../../Shared/Breadcrumb';
import './index.scss';

const SingleLesson = () => {
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

  const [lectureContent, setLectureContent] = useState('');
  useEffect(() => {
    axios.get('http://localhost:3030/lessons/lesson', { params: { lectureId } }).then(res => {
      setLectureContent(res.data.lecture);
    });
  }, [lectureId]);
  return (
    <Container>
      <Breadcrumb breadcrumbItems={breadcrumbItems} />
      <div className='SLcontainer'>
        <div
          dangerouslySetInnerHTML={{
            __html: lectureContent
          }}
        />
      </div>
    </Container>
  );
};

export default SingleLesson;
