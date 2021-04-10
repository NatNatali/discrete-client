import { useEffect, useState, Fragment } from 'react';
import { Checkbox } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Select } from 'antd';
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

  const AddQuestion = () => {
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

  const RemoveQuestion = (index) => {
    const deletedQuestions = [...questionsCount];
    setQuestionCount(deletedQuestions.filter((_, idx) => index !== idx));
  };

  return (
    <Container>
      <Breadcrumb breadcrumbItems={breadcrumbItems} />
      <div style={{ textAlign: 'center' }}><Text level={1}>Ստեղծել Թեստ</Text></div>
      <Select
        placeholder='Գլուխ'
        style={{ width: '50%' }}
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
      <Select
        placeholder='Թեմա'
        style={{ width: '50%' }}
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
      <div className='test-form-wrapper'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {
            questionsCount?.map((checkboxes, index) => (
              <Fragment key={index}>
                <div>
                  <Input
                    name={`question_${index}`}
                    inputRef={register({
                      required: 'Question is Required'
                    })}
                  />
                  {errors['question'] && <span className='error-message'>{errors['question'].message}</span>}
                  <Button onClick={() => RemoveQuestion(index)}>Remove</Button>
                </div>
                {
                  testForm?.map((item, i) => (
                    <div key={i} className='input-checkbox'>
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
                      <Checkbox
                        name={`correct_${index}_${i}`}
                        inputRef={register}
                        checked={checkboxes.checkboxes[i]?.checked}
                        onChange={() => handleCheckbox(index, i)}
                      />
                    </div>
                  ))
                }
              </Fragment>
            ))
          }
          <div>
            <Button type='submit'><Text level='1'>Սեղմել</Text></Button>
            <Button onClick={() => AddQuestion()}><Text level='1'>+</Text></Button>
          </div>
        </form>
      </div>
    </Container>
  );

};

export default CreateTest;
