import React, {useEffect, useState} from 'react';
import Container from "../Container";
import axios from "axios";
import {useParams} from "react-router";
import './index.scss'
import Breadcrumb from "../../Shared/Breadcrumb";

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
    ]

    const [lectureContent, setLectureContent] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:3030/lessons/lesson`,  { params: { lectureId } }).then(res => {
            setLectureContent(res.data.lecture);
        });
    },[lectureId])
    return <Container>
        <Breadcrumb breadcrumbItems={breadcrumbItems}/>
        <div className='SLcontainer'>
            <div
                dangerouslySetInnerHTML={{
                    __html: lectureContent
                }}
            />
        </div>
    </Container>;
};

export default SingleLesson;