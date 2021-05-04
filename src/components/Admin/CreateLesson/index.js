import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Input, Modal, Row, Col } from 'antd';
import katex from 'katex';
import SunEditor from 'suneditor-react';
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
import 'suneditor/dist/css/suneditor.min.css';
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
      <Row>
        <Col span={8} offset={3}>
          <Select
            placeholder='Գլուխ'
            style={{ width: '100%' }}
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
        </Col>
        <Col span={8} offset={2}>
          <Select
            placeholder='Թեմա'
            style={{ width: '100%' }}
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
        </Col>
      </Row>
      <div className='create-lesson'>
        <Row>
          <Col span={20} offset={2}>
            <SunEditor
              height='300'
              placeholder='Please type here...'
              defaultValue={content}
              onChange={value => {
                setContent(value);
              }}
              setOptions={{
                katex: katex,
                buttonList: [
                  ['undo', 'redo'],
                  ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'math'],
                  ['font', 'fontSize', 'formatBlock'],
                  ['align', 'horizontalRule', 'list', 'lineHeight', 'table'],
                ],
              }}
            />
          </Col>
        </Row>
        <div className='submit-lesson-wrapper'>
          <Button
            disabled={!selectedSectionId}
            onClick={() => {
              onCreateLesson(content);
            }}
          >
            <Text>Ստեղծել</Text>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default CreateLesson;
