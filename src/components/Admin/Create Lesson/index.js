import React from 'react'
import Input from '../../../Shared/Input'
import Button from "../../../Shared/Button";
import {TextareaAutosize, TextField} from "@material-ui/core";

const CreateLesson = () => {
    return <div>
        <div>
            <h1>Ավելացնել Դաս</h1>
            <Input type='text'
              label='ՎԵՐՆԱԳԻՐ'
              variant='filled'
            />
            <TextField
                label="ԴԱՍԱԽՈՍՈՒԹՅՈՒՆ"
                multiline
                rows={4}
                variant="filled"
                fullWidth
                rows='15'
            />
            <Button>Ստեղծել</Button>
        </div>
        <div>
            <h1>Ավելացնել Թեստ</h1>
            <Button>Ստեղծել</Button>
        </div>
    </div>
}

export default CreateLesson;