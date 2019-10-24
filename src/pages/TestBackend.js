import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();
  const handleClick=()=>{
  	axios.post(`/profile/contractor`)
            .then((response) => {
                 console.log('response', response);
            }, (error) => {
                console.log(error);
        });
  }

  return (
      <Button variant="contained" className={classes.button} onClick={handleClick}>
        Default
      </Button>
    );
}