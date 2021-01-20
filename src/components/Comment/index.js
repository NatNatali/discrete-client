import React, {useEffect, useState, useRef, useLayoutEffect} from 'react'
import Container from "../Container";
import Breadcrumb from "../../Shared/Breadcrumb";
import Input from "../../Shared/Input";
import Button from "../../Shared/Button";
import './index.scss'
import Text from "../../Shared/Text";
import { Tabs } from 'antd';
import { Tooltip } from 'antd';
const { TabPane } = Tabs;

const Comment = () => {
    const [inputValue, setInputValue] = useState('')
    const [displayValue, setDisplayValue] = useState([])

    const handleButtonClick = () => {
        if(inputValue) {
            const newItem = displayValue.concat(inputValue)
            setDisplayValue(newItem);
            console.log(newItem);
        }
    }

    useLayoutEffect(() => {
        if(displayValue?.length) {
            const scrollEl = document.querySelector('.comment-items');
            if (scrollEl){
                const { scrollHeight } = scrollEl;
                scrollEl.scrollTo(0, scrollHeight);
            }
        }
    }, [displayValue]);

    useEffect(() => {
        setInputValue('')
    },[displayValue])

    const breadcrumbItems = [
        {
            name: 'Գլխավոր էջ',
            link: '/'
        }, {
            name: 'Մեկնաբանություն'
        }
    ]

    return <Container>
        <Breadcrumb breadcrumbItems={breadcrumbItems}/>
        <div>
            <div className='comment-wrapper'>
                <div className='tab-items-container'>
                    <Tabs defaultActiveKey="1" tabPosition='left'>
                        {[...Array.from({ length: 7 }, (v, i) => i)].map(i => (
                            <TabPane tab={<Tooltip placement="topLeft" title='AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'>{'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'}</Tooltip>} key={i} disabled={i === 28}>
                                <div className='comment-items'>
                                    {displayValue.map((item, index) => {
                                        return <Text key={index}>
                                            <div className='comment-item'>
                                            {index}   {item}
                                          </div>
                                        </Text>
                                    })}
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
                            onChange={(e) => {setInputValue(e.target.value)}}
                            type='text'
                            label={<Text level='4'>{'Մեկնաբանություն'}</Text>}
                            variant='filled'
                        />
                    </div>
                    <Button onClick={() => handleButtonClick()} >
                        <Text level='4'>
                            Ավելացնել
                        </Text>
                    </Button>
                </div>
            </div>
        </div>
    </Container>
}

export default Comment;