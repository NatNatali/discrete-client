import React from 'react'
import Input from '../../../Shared/Input'
import Button from "../../../Shared/Button";
import { TextField } from "@material-ui/core";
import Text from "../../../Shared/Text";
import Container from "../../Container";
import './index.scss'
import Breadcrumb from "../../../Shared/Breadcrumb";

const CreateLesson = () => {
    const breadcrumbItems = [
        {
            name: 'Գլխավոր էջ',
            link: '/'
        }, {
            name: 'Ստեղծել Դաս',
        }
    ]
    return <Container>
        <Breadcrumb breadcrumbItems={breadcrumbItems}/>
        <div className='create-lesson'>
            <Text level={1}>Ավելացնել Դաս</Text>
            <Input type='text'
              label='ՎԵՐՆԱԳԻՐ'
              variant='filled'
            />
            <TextField
                label="ԴԱՍԱԽՈՍՈՒԹՅՈՒՆ"
                multiline
                rows={15}
                variant="filled"
                fullWidth
            />
            <Button><Text level='1'>Ստեղծել</Text></Button>
        </div>
        <div className='create-test'>
            <Text level={1}>Ավելացնել Թեստ</Text>
            <Button><Text level='1'>Ստեղծել</Text></Button>
        </div>
    </Container>
}

export default CreateLesson;