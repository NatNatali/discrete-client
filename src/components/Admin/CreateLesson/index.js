import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Input, Modal } from 'antd';
import JoditEditor from 'jodit-react';
import { createLessonAction } from '../../../actions/lessons.actions';
import { createChapterAction, getChaptersAction } from '../../../actions/chapters.actions';
import { chaptersSelector } from '../../../selectors/chapters.selectors';
import { createSectionAction, getSectionsAction } from '../../../actions/sections.actions';
import { sectionsSelector } from '../../../selectors/sections.selectors';
import Button from '../../../Shared/Button';
import Text from '../../../Shared/Text';
import Container from '../../Container';
import Breadcrumb from '../../../Shared/Breadcrumb';
import { errorToast } from '../../../Shared/Notification';
import './index.scss';

const { Option } = Select;
const CreateLesson = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const [contentInput, setContentInput] = useState('');
  const [sectionContent, setSectionContent] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [chapterSelectValue, setChapterSelectValue] = useState(null);
  const [selectedSectionId, setSelectedSectionId] = useState(null);
  const [createMode, setCreateMode] = useState('');

  const chapters = useSelector(chaptersSelector);
  const sections = useSelector(sectionsSelector);

  const onCreateLesson = content => {
    if (!content){
      errorToast('Content is required');
    } else {
      dispatch(createLessonAction.request({
        lecture: content,
        section_id: selectedSectionId,
      }));
    }
  };

  useEffect(() => {
    dispatch(getChaptersAction.request());
  }, [dispatch]);

  const breadcrumbItems = [
    {
      name: 'Գլխավոր էջ',
      link: '/'
    }, {
      name: 'Դաս',
      link: '/lesson'
    }, {
      name: 'Ստեղծել Դաս',
    }
  ];

  const addChapter = () => {
    dispatch(createChapterAction.request({
      chapter: contentInput,
      onSuccess: () => {
        setContentInput('');
        setModalVisible(false);
      }
    }));
  };

  const addSection = () => {
    dispatch(createSectionAction.request({
      section: sectionContent,
      id: chapterSelectValue,
      onSuccess: () => {
        setSectionContent('');
        setModalVisible(false);
      }
    }));
  };

  const selectValueChange = (value) => {
    setChapterSelectValue(value);
    dispatch(getSectionsAction.request({ chapter_id: value }));
  };

  return (
    <Container>
      <Modal
        title={createMode === 'chapter' ? 'Գլխի վերնագիր' : 'Թեմայի վերնագիր'}
        okText='Ավելացնել'
        onOk={() => {
          if (createMode === 'chapter') {
            addChapter();
          } else {
            addSection();
          }
        }}
        cancelText='Ոչ'
        onCancel={() => setModalVisible(false)}
        closable
        centered
        visible={modalVisible}
        destroyOnClose
      >
        <Input
          defaultValue={contentInput}
          onChange={(e) => {
            if (createMode === 'chapter') {
              setContentInput(e.target.value);
            } else {
              setSectionContent(e.target.value);
            }
          }}
        />
      </Modal>
      <Breadcrumb breadcrumbItems={breadcrumbItems} />
      <div style={{ textAlign: 'center' }}><Text level={1}>Ստեղծել Դաս</Text></div>
      <Select
        placeholder='Գլուխ'
        style={{ width: '50%' }}
        onChange={selectValueChange}
        dropdownRender={(originNode) => (
          <div>
            <div>
              <button
                onClick={() => {
                  setModalVisible(true);
                  setCreateMode('chapter');
                }}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                +Add Chapter title
              </button>
            </div>
            <div>{originNode}</div>
          </div>
        )}
      >
        {
          chapters?.map((chapter) => (
            <Option key={chapter.id} value={chapter.id}>
              {chapter.title}
            </Option>
          ))
        }
      </Select>
      <Select
        placeholder='Թեմա'
        style={{ width: '50%' }}
        disabled={!chapterSelectValue}
        onChange={(value) => {
          setSelectedSectionId(value);
        }}
        dropdownRender={(originNode) => (
          <div>
            <div>
              <button
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                onClick={() => {
                  setCreateMode('section');
                  setModalVisible(true);
                }}
              >
                +Add Tema title
              </button>
            </div>
            <div>{originNode}</div>
          </div>
        )}
      >
        {
          sections?.map(section => (
            <Option key={section.id} value={section.id}>
              {section.title}
            </Option>
          ))
        }
      </Select>
      <div className='create-lesson'>
        <JoditEditor
          value={content}
          onChange={value => {
            setContent(value);
          }}
          tabIndex={1} // tabIndex of textarea
        />
        <Button
          disabled={!selectedSectionId}
          onClick={() => {
            onCreateLesson(content);
          }}
        >
          <Text level='1'>Ստեղծել</Text>
        </Button>
      </div>
    </Container>
  );
};

export default CreateLesson;
