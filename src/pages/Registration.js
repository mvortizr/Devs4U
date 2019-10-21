import React from 'react';
import {TextField, Button, Typography, Grid, Avatar, CssBaseline, FormControlLabel, Checkbox, Box, Container, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import {
  fade,
  withStyles,
} from '@material-ui/core/styles';

import Link from '@material-ui/core/Link';

//Quería importar esta librería para el símbolo del candado
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: '10px',
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '500px',
    padding: '10px 12px',
    margin:'15px 5px'
    // Use the system font instead of the default Roboto font.
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
          position: 'relative',
          backgroundColor: theme.palette.grey[800],
          color: theme.palette.common.white,
          marginBottom: theme.spacing(4),
          backgroundImage: 'url(https://source.unsplash.com/weekly?water)',
          //No puedo colocar la imagen logo
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
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
    },
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: theme.palette.grey[0],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundColor: 'rgba(62, 58, 50, 0.8)',
      //No puedo colocar la imagen logo
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    text:{
      color:"#ffff",
    },
    button:{
      color:"#ffff",
      backgroundColor:"#1E39A7"
    }
    
}));

function Copyright() {
    return (
      <Typography variant="body2" color="white" align="center">
        {'Copyright © '}
          Devs4U
        {' '}
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

    const [select, setSelect] = React.useState('Freelancer');

    const handleClick = (event, newSelect) => {
      setSelect(newSelect);
    };

    const children = [
      <ToggleButton value="Freelancer" className={classes.button}>
        Registrarse como usuario Freelancer
      </ToggleButton>,
      <ToggleButton value="contractor" className={classes.button}>
        Registrarse como usuario Contratista
      </ToggleButton>,
    ];
    
    return(

    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <main>
      <Paper className={classes.mainFeaturedPost}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h3" variant="h5" align="center" color="white" gutterBottom>
          Regístrate
        </Typography>
        <Typography variant="h5" align="center" color="white" paragraph>
            Puedes registrarte como usuario Freelancer o como usuario contratista
        </Typography>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <ToggleButtonGroup size="medium" value={select} exclusive onChange={handleClick}>
              {children}
            </ToggleButtonGroup>
          </Grid>
        </Grid>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item>
              {/* <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombres"
                onChange={handleChange('firstName')}
                autoFocus
              /> */}
              <FormControl >
                <InputLabel shrink htmlFor="bootstrap-input" className={classes.text}>
                  Nombres
                </InputLabel>
                <BootstrapInput id="firstName" />
              </FormControl>
            </Grid>
            <Grid item>
              {/* <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellidos"
                onChange={handleChange('lastName')}
                name="lastName"
                autoComplete="lname"
              /> */}
              <FormControl >
                <InputLabel shrink htmlFor="bootstrap-input" className={classes.text}>
                  Apellidos
                </InputLabel>
                <BootstrapInput id="lastName" />
              </FormControl>
            </Grid>
            <Grid item>
              {/* <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                onChange={handleChange('email')}
                name="email"
                autoComplete="email"
              /> */}
              <FormControl >
                <InputLabel shrink htmlFor="bootstrap-input" className={classes.text}>
                  Correo Electrónico
                </InputLabel>
                <BootstrapInput id="email" />
              </FormControl>
            </Grid>
            <Grid item>
              {/* <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña"
                onChange={handleChange('password')}
                type="password"
                id="password"
                autoComplete="current-password"
              /> */}
              <FormControl >
                <InputLabel shrink htmlFor="bootstrap-input" className={classes.text}>
                  Contraseña
                </InputLabel>
                <BootstrapInput id="password" />
              </FormControl>
            </Grid>
            <Grid item>
              {/* <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Confirmar contraseña"
                type="password"
                id="confirmpassword"
                autoComplete="current-password"
              /> */}
              <FormControl >
                <InputLabel shrink htmlFor="bootstrap-input" className={classes.text}>
                  Confirmar contraseña
                </InputLabel>
                <BootstrapInput id="confirmpassword" />
              </FormControl>
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
          <Grid container justify="center">
            <Grid item>
              <Link href="/login" variant="body2" className={classes.text}>
                ¿Ya tiene una cuenta? Inicia Sesión
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      </Paper>
      </main>
    </Container>
         
    );

}

export default Registration;