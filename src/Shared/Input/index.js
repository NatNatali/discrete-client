import React from 'react'
import { TextField } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    root: {
        '& .MuiInputBase-root': {
            borderRadius: '0'
        },
        '& .MuiInputBase-root.Mui-focused': {
            outline: '2px solid #B7D69F',
            border: 'none'
        },
        '& .MuiFilledInput-underline:after': {
            borderBottom: 'none',
            outline: 'none'
        },
        '& .Mui-focused.MuiFilledInput-underline:before': {
            borderBottom: 'none',
            outline: 'none'
        },
        '& .MuiInputBase-root.Mui-error': {
            outline: '2px solid #A91919',
            border: 'none'
        },
        '& .Mui-error.MuiFilledInput-underline:before': {
           borderBottom: 'none'
        },
    },
});

const Input = (props) => {
    const classes = useStyles()
    return <TextField {...props} className={classes.root}/>
}

export default Input;