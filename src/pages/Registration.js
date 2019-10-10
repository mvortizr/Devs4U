import React from 'react';
import {TextField, Button, Typography, Grid, Avatar, CssBaseline, FormControlLabel, Checkbox, Box, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import Link from '@material-ui/core/Link';

//Quería importar esta librería para el símbolo del candado
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
          backgroundColor: theme.palette.common.white,
        },
      },
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },    
    marginGrid: {
        marginTop: theme.spacing(5),
    }
}));

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Devs4U
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Registration = props => {

   const [values, setValues] = React.useState({
        email: '',
        firstName:'',
        lastName:'',
        password: '',
    });
   
    const classes = useStyles();

    /*Funcion vincula el estado del componente con el valor de los campos*/
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleSubmit = () => {
        console.log('Im fired reg');
        axios.post('/register', values)
            .then((response) => {
                  console.log('reg response',response)
            }, (error) => {
                console.log(error);
            });   
    }
    
    return(

    <Container component="main" maxWidth="xm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h3" variant="h5" align="center" color="textPrimary" gutterBottom>
          Regístrate
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Puedes registrarte como usuario Freelancer o como usuario contratista
        </Typography>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button variant="contained" color="primary">
              Registrarse como usuario Freelancer
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              Registrarse como usuario Contratista
            </Button>
          </Grid>
        </Grid>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombres"
                onChange={handleChange('firstName')}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellidos"
                onChange={handleChange('lastName')}
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                onChange={handleChange('email')}
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña"
                onChange={handleChange('password')}
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Repita la contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Registrarse
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                ¿Ya tiene una cuenta? Inicia Sesión
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>


         /*
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
                            Registrate
                        </Typography>
                    </Grid>
               
                    <Grid item xs={12}>
                        <TextField
                            label="Nombre"
                            margin="normal"
                            onChange={handleChange('firstName')}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Apellido"
                            margin="normal"
                            onChange={handleChange('lastName')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Correo"
                            margin="normal"
                            autoComplete="email"
                            type="email"
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
                        <TextField
                            label="Confirmar contraseña"
                            margin="normal"
                            autoComplete="password"
                            type="password"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={handleSubmit}>        
                            Registrate
                        </Button>
                    </Grid>
                </Grid>
            </>
            */
         
    );

}

export default Registration;