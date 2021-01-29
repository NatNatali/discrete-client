import React from 'react'
import { Collapse } from 'antd';
import Container from "../Container";
import {Link, useHistory} from "react-router-dom";
import Breadcrumb from "../../Shared/Breadcrumb";
import './index.scss'
import Input from "../../Shared/Input";
import Text from "../../Shared/Text";
import Button from "../../Shared/Button";

const Lesson = () => {
    const history = useHistory();
    const breadcrumbItems = [
        {
            name: 'Գլխավոր էջ',
            link: '/'
        }, {
            name: 'Դաս',
        }
    ]

    const { Panel } = Collapse;

    const allLessons = [
        {
            id: 1,
            title: 'chapter title1',
            lectures: [
                {
                    id: 29,
                    name: 'lecture name1',
                    content: 'some content in html1'
                }
            ]
        }
    ]

    function callback(key) {
        console.log(key);
    }

    return <Container>
        <Breadcrumb breadcrumbItems={breadcrumbItems}/>
        <Collapse onChange={callback}>
            {
                allLessons.map((item, index) => {
                    return <Panel header={item.title} key={item.id}>
                        <Collapse>
                            {
                                item.lectures.map((lecture,index) =>{
                                    return <Panel header={lecture.name} key={lecture.id}>
                                        <p className='lecture'>
                                            {lecture.content}
                                        </p>
                                        <div className='lesson-links'>
                                            <a href="" onClick={() => history.push(`/lesson/${item.id}/lecture/${lecture.id}`)}>
                                                Կարդալ Ավելին
                                            </a>
                                            <Link to="/test">
                                                ԹԵՍՏ
                                            </Link>
                                        </div>
                                    </Panel>
                                })
                            }
                        </Collapse>
                    </Panel>
                })
            }
        </Collapse>
    </Container>
}

export default Lesson;