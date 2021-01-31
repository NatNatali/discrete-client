import makeStyles from '@material-ui/core/styles/makeStyles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    '& .MuiInputBase-root': {
      borderRadius: '0',
      backgroundColor: '#e8f0fe'
    },
    '&.MuiTextField-root': {
      width: '100%',
      backgroundColor: '#e8f0fe'
    },
    '& .MuiFilledInput-underline:after': {
      borderBottom: 'none',
      outline: 'none'
    },
    '& .Mui-focused.MuiFilledInput-underline:before': {
      borderBottom: 'none',
      outline: 'none',
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
  const classes = useStyles();
  return <TextField {...props} className={classes.root} />;
};

export default Input;
