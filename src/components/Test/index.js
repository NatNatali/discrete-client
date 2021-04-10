import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Radio } from 'antd';
import Container from '../Container';
import Breadcrumb from '../../Shared/Breadcrumb';
import {
  getSectionTestsAction,
  submitTestAction
} from '../../actions/test.actions';
import {
  testSelector,
  correctAnswersCountSelector,
  correctAnswersSelector
} from '../../selectors/tests.selectors';
import './index.scss';
import Text from '../../Shared/Text';
import Button from '../../Shared/Button';

const breadcrumbItems = [
  {
    name: 'Գլխավոր էջ',
    link: '/'
  }, {
    name: 'Դաս',
    link: '/lesson'
  }, {
    name: 'Թեստ',
  }
];

const Test = () => {
  const test = useSelector(testSelector);
  const correctCount = useSelector(correctAnswersCountSelector);
  const correctAnswers = useSelector(correctAnswersSelector);

  const resultsPercent = correctCount / test?.length * 100;

  let { sectionId } = useParams();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    dispatch(getSectionTestsAction.request({ sectionId }));
  }, [dispatch, sectionId]);

  const onSubmit = (data) => {
    dispatch(submitTestAction.request({
      answers: data,
      sectionId,
    }));
  };

  return (
    <Container>
      <Breadcrumb breadcrumbItems={breadcrumbItems} />
      <div>
        {
          test?.length ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              {test?.map((question, i) => (
                <div key={question.id}>
                  <div>
                    {question.questions[0].question}
                  </div>
                  <Radio.Group name='radio'>
                    {question.questions[0]?.answers.map((answer, index) => (
                      <div key={index}>
                        <label>
                          <input
                            type='radio'
                            ref={register}
                            value={answer.id}
                            name={`test_${i}`}
                            id={`radio_${index}`}
                          />
                          <Text>
                            {answer?.option}
                          </Text>
                        </label>
                        {correctAnswers?.[i]?.id === answer.id && (
                          <Text>Right</Text>
                        )}
                      </div>
                    ))}
                  </Radio.Group>
                </div>
              ))}
              {!!correctCount && (
                <div>
                  The Result is {resultsPercent}%
                </div>
              )}
              {correctCount === 0 && (
                <div>
                  The Result is 0%
                </div>
              )}
              <div>
                <Button type='submit'><Text level='1'>Ավարտել</Text></Button>
              </div>
            </form>
          ) : (
            <div>
              No tests are available
            </div>
          )
        }
      </div>
    </Container>
  );
};

export default Test;
