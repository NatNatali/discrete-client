import React from 'react'
import { Collapse } from 'antd';
import Container from "../Container";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Shared/Breadcrumb";
import './index.scss'
import Input from "../../Shared/Input";
import Text from "../../Shared/Text";
import Button from "../../Shared/Button";

const Lesson = () => {


    const { Panel } = Collapse;

    const lecture = 'A dog is a type of domesticated animal.\n' +
        '          Known for its loyalty and faithfulness,\n' +
        '          it can be found as a welcome guest in many households across the world.\n' +
        '           A dog is a type of domesticated animal.\n' +
        '          Known for its loyalty and faithfulness,\n' +
        '          it can be found as a welcome guest in many households across the world.\n' +
        '           A dog is a type of domesticated animal.\n' +
        '          Known for its loyalty and faithfulness,\n' +
        '          it can be found as a welcome guest in many households across the world.\n' +
        '           A dog is a type of domesticated animal.\n' +
        '          Known for its loyalty and faithfulness,\n' +
        '          it can be found as a welcome guest in many households across the world.\n' +
        '           A dog is a type of domesticated animal.\n' +
        '          Known for its loyalty and faithfulness,\n' +
        '          it can be found as a welcome guest in many households across the world.\n' +
        '           A dog is a type of domesticated animal.\n' +
        '          Known for its loyalty and faithfulness,\n' +
        '          it can be found as a welcome guest in many households across the world.\n' +
        '           A dog is a type of domesticated animal.\n' +
        '          Known for its loyalty and faithfulness,\n' +
        '          it can be found as a welcome guest in many households across the world.\n' +
        '           A dog is a type of domesticated animal.\n' +
        '          Known for its loyalty and faithfulness,\n' +
        '          it can be found as a welcome guest in many households across the world.\n' +
        '        `;';

    const lessons = [
        {
            heading1: 'Բազմություններ և հարաբերություններ',
            heading2: 'Բազմության հասկացությունը',
            lecture: lecture,
        }, {
            heading1: 'CCC',
            heading2: 'CC',
            lecture: lecture,
        }, {
            heading1: 'BBB',
            heading2: 'BBB',
            lecture: lecture,
        }, {
            heading1: 'BBB',
            heading2: 'BBB',
            lecture: lecture,
        }, {
            heading1: 'BBB',
            heading2: 'BBB',
            lecture: lecture,
        }, {
            heading1: 'BBB',
            heading2: 'BBB',
            lecture: lecture,
        }, {
            heading1: 'BBB',
            heading2: 'BBB',
            lecture: lecture,
        },

    ]

    const breadcrumbItems = [
        {
            name: 'Գլխավոր էջ',
            link: '/'
        }, {
            name: 'Դաս',
        }
    ]

    function callback(key) {
        console.log(key);
    }

    return <Container>
        <Breadcrumb breadcrumbItems={breadcrumbItems}/>
        <Collapse onChange={callback}>
            {
                lessons.map((item, index) => {
                    return <Panel header={item.heading1} key={index}>
                        <Collapse>
                            <Panel header={item.heading2} key={index}>
                                <p className='lecture'>
                                    {item.lecture}
                                </p>
                                <div className='lesson-links'>
                                    <a href="">
                                        Կարդալ Ավելին
                                    </a>
                                    <Link to="/test">
                                        ԹԵՍՏ
                                    </Link>
                                </div>
                            </Panel>
                        </Collapse>
                    </Panel>
                })
            }
        </Collapse>
    </Container>
}

export default Lesson;