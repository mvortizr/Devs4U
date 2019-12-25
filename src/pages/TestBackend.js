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

  const dataProjectCreate = {
      name: "Un proyecto",
      description: "una descripcion",
      entregables: "entregables",
      tecnologies: ['hola','como','estas'],
      photo:"",
      postulados: JSON.stringify({1:'1',2:'2'}),
      etapa:"",
      additionals:"",
      disponibilidad: "",
      iteraciones:JSON.stringify({1:'1',2:'2'}) ,
      projectType: "hola"
  }

  const dataProjectModify = {
      name: "Otro proyecto ",
      description: "una descripcion",
      entregables: "entregables lalala",
      tecnologies: ['hola','como','estas'],
      photo:"",
      postulados: JSON.stringify({1:'1',2:'2'}),
      etapa:"",
      additionals:"",
      disponibilidad: "",
      iteraciones:JSON.stringify({1:'1',2:'2'}) ,
      projectType: "hola"
  }

  const searchTerm={
    search: 'María'
  }


  const handleClick=()=>{
  	axios.post('/user/search',searchTerm)
            .then((response) => {
                 console.log('response', response);
            }, (error) => {
                console.log(error);
        });
  }

  return (
      <Button variant="contained" onClick={handleClick}>
        CLICK
      </Button>
    );
}