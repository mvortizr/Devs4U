import React from 'react';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


export default function Technologies(props){
      if(props.arr){
        return(
           props.arr.map(tech=>(              
            <Typography paragraph>
              <li >   
              <Typography component="span"/> {tech}
                </li>
              </Typography>
        )))
      } else{
        return null;
      }   
}