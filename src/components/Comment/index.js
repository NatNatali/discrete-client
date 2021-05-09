import { useEffect, useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, Tooltip } from 'antd';
import { addCommentAction, getCommentsAction } from '../../actions/comment.actions';
import { getChaptersAction } from '../../actions/chapters.actions';
import { chaptersSelector } from '../../selectors/chapters.selectors';
import { commentsSelector } from '../../selectors/comments.selectors';
import { userProfile } from '../../selectors/profile.selectors';
import Container from '../Container';
import Breadcrumb from '../../Shared/Breadcrumb';
import Input from '../../Shared/Input';
import Button from '../../Shared/Button';
import Text from '../../Shared/Text';
import './index.scss';

const { TabPane } = Tabs;

const Comment = () => {
  const dispatch = useDispatch();
  const chapters = useSelector(chaptersSelector);
  const comments = useSelector(commentsSelector);
  const userDetails = useSelector(userProfile);
  const [inputValue, setInputValue] = useState('');
  const [activeTab, setActiveTab] = useState('');

  const handleButtonClick = () => {
    if (inputValue) {
      dispatch(addCommentAction.request({
        comment: inputValue,
        chapterId: activeTab,
        number: userDetails.number,
      }));
    }
  };

  const handleTabChange = (key) => {
    if (activeTab !== key) {
      setActiveTab(key);
    }
  };

  useEffect(() => {
    setActiveTab(chapters[0]?.id);
  }, [chapters]);

  useEffect(() => {
    dispatch(getChaptersAction.request());
  }, [dispatch]);

  useEffect(() => {
    if (!!activeTab) {
      dispatch(getCommentsAction.request({ chapterId: activeTab }));
    }
  }, [activeTab, dispatch]);

  useLayoutEffect(() => {
    if (comments?.length) {
      const scrollEl = document.querySelector('.comment-items');
      if (scrollEl){
        const { scrollHeight } = scrollEl;
        scrollEl.scrollTo(0, scrollHeight);
      }
    }
  }, [comments]);

  useEffect(() => {
    setInputValue('');
  }, [comments]);

  const breadcrumbItems = [
    {
      name: 'Գլխավոր էջ',
      link: '/'
    }, {
      name: 'Մեկնաբանություն'
    }
  ];

  return (
    <Container>
      <Breadcrumb breadcrumbItems={breadcrumbItems} />
      <div>
        <div className='comment-wrapper'>
          <div className='tab-items-container'>
            <Tabs tabPosition='left' onChange={handleTabChange}>
              {chapters?.map(i => (
                <TabPane
                  tab={<Tooltip placement='topLeft' title={i.title}>{i.title}</Tooltip>}
                  key={i.id}
                >
                  <div className='comment-items'>
                    {comments?.map((item, index) => (
                      <Text key={index}>
                        <div className='comment-item'>
                          <Tooltip title={`${item.user.first_name}` + ' ' + `${item.user.last_name}`}>
                            <div className='comment-avatar'>
                              {item.user.first_name[0]}.{item.user.last_name[0]}.
                            </div>
                          </Tooltip>
                          <div className='comment-content'>
                            {item.content}
                          </div>
                        </div>
                      </Text>
                    ))}
                  </div>
                </TabPane>
              ))}
            </Tabs>
          </div>
        </div>
        <div className='comment-chat'>
          <div className='comment-form'>
            <div className='comment-input'>
              <Input
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
                type='text'
                label={<Text level='4'>Մեկնաբանություն</Text>}
                variant='filled'
              />
            </div>
            <Button onClick={() => handleButtonClick()}>
              <Text level='4'>
                Ավելացնել
              </Text>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Comment;
