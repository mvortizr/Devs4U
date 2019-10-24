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
  const dataCreatePortfolio ={
    name: "Mi proyecto de portafolio",
    projectType: "Debuggeo",
    linkSee: "www.facebook.com",
    linkCode: "www.google.com",
    description:"lorem ipsum",
    image: "foto"
  }

  const dataUpdatePortfolio ={
    name: "Mi otro proyecto",
    projectType: "Web app",
    linkSee: "www.facebook.com",
    linkCode: "www.google.com",
    description:"lorem ipsum itsem",
    image: ""
  }

  /*const handleClick=()=>{
  	axios.post('/project/create',)
            .then((response) => {
                 console.log('response', response);
            }, (error) => {
                console.log(error);
        });
  }*/

  return (
      <Button variant="contained" onClick={handleClick}>
        CLICK
      </Button>
    );
}