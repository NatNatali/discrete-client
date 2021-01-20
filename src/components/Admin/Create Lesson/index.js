import React, {useRef, useState} from 'react'
import Input from '../../../Shared/Input'
import Button from "../../../Shared/Button";
import { TextField } from "@material-ui/core";
import Text from "../../../Shared/Text";
import Container from "../../Container";
import './index.scss'
import Breadcrumb from "../../../Shared/Breadcrumb";
import JoditEditor from "jodit-react";
import axios from "axios";

const CreateLesson = () => {
    const [content, setContent] = useState('')

    const onCreateLesson = content => {
        console.log(content);
        if(content){
            axios.post(`http://localhost:3030/lessons/lesson`, content).then(res => {
                console.log('res', res)
            })
        }
    }

    const breadcrumbItems = [
        {
            name: 'Գլխավոր էջ',
            link: '/'
        }, {
            name: 'Ստեղծել Դաս',
        }
    ]



    const convertHtmlToText = (html) => {
        const divContainer= document.createElement("div");
        divContainer.innerHTML = html;
        return divContainer.textContent || divContainer.innerText || "";
    }

    const lecture =convertHtmlToText(content)
    console.log(lecture)

    return <Container>
        <Breadcrumb breadcrumbItems={breadcrumbItems}/>
        <div className='create-lesson'>
            <Text level={1}>Ստեղծել Դաս</Text>
            <JoditEditor
                value={content}
                onChange={ value => {
                    setContent(value);
                }}
                tabIndex={1} // tabIndex of textarea
            />
            <Button onClick={() => {onCreateLesson(content)}}><Text level='1'>Ստեղծել</Text></Button>
        </div>
    </Container>
}

export default CreateLesson;