import React, {useEffect, useState} from 'react';
import Container from "../Container";
import axios from "axios";
import {useParams} from "react-router";

const SingleLesson = () => {
    let { lectureId } = useParams();

    const [lectureContent, setLectureContent] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:3030/lessons/lesson`,  { params: { lectureId } }).then(res => {
            setLectureContent(res.data.lecture);
        });
    },[lectureId])
    return <Container>
        <div
            dangerouslySetInnerHTML={{
                __html: lectureContent
            }}
            style={{width: '100%'}}
        />
    </Container>;
};

export default SingleLesson;