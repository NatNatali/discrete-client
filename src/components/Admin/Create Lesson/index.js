import React from 'react'
import Input from '../../../Shared/Input'
import Button from "../../../Shared/Button";
import { TextField } from "@material-ui/core";
import Text from "../../../Shared/Text";
import Container from "../../Container";
import './index.scss'

const CreateLesson = () => {
    return <Container>
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
            <Button>Ստեղծել</Button>
        </div>
        <div className='create-test'>
            <Text level={1}>Ավելացնել Թեստ</Text>
            <Button>Ստեղծել</Button>
        </div>
    </Container>
}

export default CreateLesson;