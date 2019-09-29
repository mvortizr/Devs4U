import React from 'react';
import {TextField, Button, Typography, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    marginGrid: {
        marginTop: theme.spacing(5),
    }
}));

const Login = props => {

   const [values, setValues] = React.useState({
        email: '',
        password: '',
    });
   
    const classes = useStyles();

    /*Funcion vincula el estado del componente con el valor de los campos*/
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleSubmit = () => {
        console.log('Im fired login');
        axios.post('/login', values)
            .then((response) => {
                  console.log('login response',response)
            }, (error) => {
                console.log(error);
            });   
    }
    
    return(
        <>
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
                className={classes.marginGrid}
                spacing={2}
            >
                    <Grid item xs={12}>
                        <Typography component="h3" variant="h3">
                            Inicia sesión 
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={12}>
                        <TextField
                            label="Correo"
                            margin="normal"
                            autoComplete="email"
                            type="email"
                            value={values.email}
                            onChange={handleChange('email')}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Contraseña"
                            margin="normal"
                            autoComplete="password"
                            type="password"
                            onChange={handleChange('password')}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={handleSubmit}>        
                            Iniciar Sesión
                        </Button>
                    </Grid>
                </Grid>
            </>
        );

}

export default Login;