import React, {useEffect, useState} from 'react'
import Container from "../Container";
import Breadcrumb from "../../Shared/Breadcrumb";
import Input from "../../Shared/Input";
import Button from "../../Shared/Button";
import './index.scss'
import Text from "../../Shared/Text";

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
        <div className='comment-chat'>
        <div className='comment-items'>
            {displayValue.map((item, index) => {
                return <div key={index}>
                    {index}   {item}
                </div>
            })}
        </div>

        <div className='comment-form'>
            <div className='comment-input'>
                <Input
                    value={inputValue}
                    onChange={(e) => {setInputValue(e.target.value)}}
                    type='text'
                    label='Մեկնաբանություն'
                    variant='filled'
                />
            </div>
        <Button onClick={() => handleButtonClick()}><Text level='4'>Ավելացնել</Text></Button>
        </div>
        </div>
    </Container>
}

export default Comment;