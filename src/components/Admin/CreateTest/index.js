import { useEffect, useState } from 'react';
import { Checkbox } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Row, Col } from 'antd';
import { useForm } from 'react-hook-form';
import Container from '../../Container';
import Input from '../../../Shared/Input';
import Text from '../../../Shared/Text';
import Button from '../../../Shared/Button';
import { errorToast } from '../../../Shared/Notification';
import { getChaptersAction } from '../../../actions/chapters.actions';
import { createTestAction } from '../../../actions/test.actions';
import { chaptersSelector } from '../../../selectors/chapters.selectors';
import { sectionsSelector } from '../../../selectors/sections.selectors';
import './index.scss';
import { getSectionsAction } from '../../../actions/sections.actions';
import Breadcrumb from '../../../Shared/Breadcrumb';

const { Option } = Select;

const CreateTest = () => {
  const dispatch = useDispatch();
  const chapters = useSelector(chaptersSelector);
  const sections = useSelector(sectionsSelector);
  const [chapterSelectValue, setChapterSelectValue] = useState(null);
  const [selectedSectionId, setSelectedSectionId] = useState(null);
  const [questionsCount, setQuestionCount] = useState(
    [{ checkboxes: [
      {
        checked: false,
      }, {
        checked: false,
      }, {
        checked: false,
      }, {
        checked: false,
      }]
    }]
  );

  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    dispatch(getChaptersAction.request());
  }, [dispatch]);

  const handleCheckbox = (index, i) => {
    const newCheckboxes = [...questionsCount];
    newCheckboxes[index].checkboxes = [
      {
        checked: false,
      }, {
        checked: false,
      }, {
        checked: false,
      }, {
        checked: false,
      }
    ];
    newCheckboxes[index].checkboxes[i].checked = !newCheckboxes[index]?.checkboxes[i].checked;
    setQuestionCount(newCheckboxes);
  };

  const selectValueChange = (value) => {
    setChapterSelectValue(value);
    dispatch(getSectionsAction.request({ chapter_id: value }));
  };

  const onSubmit = (data) => {
    if ('correctAnswer') {
      dispatch(createTestAction.request({
        data,
        sectionId: selectedSectionId,
        questionsCount: questionsCount.length,
      }));
    } else {
      errorToast('Correct answer is required');
    }
  };

  const testForm = [
    {
      inputReg: register({
        required: 'Answer is Required'
      }),
    }, {
      inputReg: register({
        required: 'Answer is Required'
      }),
    }, {
      inputReg: register({
        required: 'Answer is Required'
      }),
    }, {
      inputReg: register({
        required: 'Answer is Required'
      }),
    }
  ];

  const AddQuestion = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const newCount = [...questionsCount];
    newCount.push({ checkboxes: [
      {
        checked: false,
      }, {
        checked: false,
      }, {
        checked: false,
      }, {
        checked: false,
      }]
    });
    setQuestionCount(newCount);
  };

  const breadcrumbItems = [
    {
      name: 'Գլխավոր էջ',
      link: '/'
    }, {
      name: 'Դաս',
      link: '/lesson'
    }, {
      name: 'Ստեղծել Թեստ',
    }
  ];

  const RemoveQuestion = (e, index) => {
    e.stopPropagation();
    e.preventDefault();
    const deletedQuestions = [...questionsCount];
    if (questionsCount.length > 1) {
      setQuestionCount(deletedQuestions.filter((_, idx) => index !== idx));
    }
  };

  return (
    <Container>
      <Breadcrumb breadcrumbItems={breadcrumbItems} />
      <div style={{ textAlign: 'center' }}><Text level={1}>Ստեղծել Թեստ</Text></div>
      <Row>
        <Col span={8} offset={3}>
          <Select
            placeholder='Գլուխ'
            style={{ width: '100%' }}
            onChange={selectValueChange}
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
      <div className='test-form-wrapper'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {
            questionsCount?.map((checkboxes, index) => (
              <div key={index} className='question-wrapper'>
                <div className='question-input'>
                  <Input
                    name={`question_${index}`}
                    inputRef={register({
                      required: 'Question is Required'
                    })}
                  />
                  {errors['question'] && <span className='error-message'>{errors['question'].message}</span>}
                </div>
                {
                  testForm?.map((item, i) => (
                    <div key={i} className='input-checkbox'>
                      <Row>
                        <Col>
                          <Input
                            name={`answer_${index}_${i}`}
                            inputRef={item.inputReg}
                          />
                          {
                            errors[`answer_${index}_${i}`] && (
                              <span className='error-message'>
                                {errors[`answer_${index}_${i}`].message}
                              </span>
                            )
                          }
                        </Col>
                        <Col>
                          <Checkbox
                            name={`correct_${index}_${i}`}
                            inputRef={register}
                            checked={checkboxes.checkboxes[i]?.checked}
                            onChange={() => handleCheckbox(index, i)}
                          />
                        </Col>
                      </Row>
                    </div>
                  ))
                }
                <Button
                  onClick={(e) => RemoveQuestion(e, index)}
                >
                  <Text>Remove Question</Text>
                </Button>
              </div>
            ))
          }
          <div className='submit-wrapper'>
            <Row>
              <Col span={12} align='left'>
                <Button onClick={e => AddQuestion(e)}><Text>Add Question</Text></Button>
              </Col>
              <Col span={12} align='right'>
                <Button type='submit'><Text>Սեղմել</Text></Button>
              </Col>
            </Row>
          </div>
        </form>
      </div>
    </Container>
  );

};

export default CreateTest;
