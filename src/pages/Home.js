import React from 'react';
import { Link } from 'react-router-dom';
import {Typography, Button } from '@material-ui/core';


const Home= () =>{
	return(
		<>
		 <Typography component="h3" variant="h3">
             Devs4U
         </Typography>
          <Button variant="contained" color="primary"  component={Link} to="/register" >        
             Registrarse
          </Button>
          <Button variant="contained" color="primary"  component={Link} to="/login">        
             Iniciar sesión
          </Button>
		</>

	);
}

export default Home;