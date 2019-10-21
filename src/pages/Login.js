import React from 'react';
import {TextField, Button, Typography, Grid, Avatar, CssBaseline, FormControlLabel, Checkbox, Box, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

//Quería importar esta librería para el símbolo del candado
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Link from '@material-ui/core/Link';

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
        marginTop: theme.spacing(1),
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
        <Container component="main" maxWidth="xm">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar Sesión
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electrónico"
              name="email"
              autoComplete="email"
              onChange={handleChange('email')}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange('password')}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordarme"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Iniciar Sesión
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"¿No tienes una cuenta? Regístrate"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
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
            */
        );

}

export default Login;