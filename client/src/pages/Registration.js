import React from 'react'
import {
  Button,
  Typography,
  Grid,
  Avatar,
  CssBaseline,
  Box,
  Container,
  CircularProgress,
  Paper
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import InputBase from '@material-ui/core/InputBase'
import { withStyles } from '@material-ui/core/styles'
import {SERVER_ROUTE} from '../config'

import Link from '@material-ui/core/Link'
import { Link as DomLink, Redirect } from 'react-router-dom'

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: '10px'
    }
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '480px',
    padding: '10px 12px',
    margin: '15px 5px'
    // Use the system font instead of the default Roboto font.
  }
}))(InputBase)

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
      backgroundPosition: 'center'
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  marginGrid: {
    marginTop: theme.spacing(5)
  },
  mainFeaturedPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundColor: 'rgba(62, 58, 50, 0.8)',
    padding: '0 10px 10px 10px',
    //No puedo colocar la imagen logo
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  text: {
    color: '#ffff'
  },
  button: {
    color: '#ffff',
    backgroundColor: '#1E39A7'
  }
}))

function Copyright() {
  return (
    <Typography variant="body2"  align="center">
      {'Copyright © '}
      Devs4U {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const Registration = props => {
  const [values, setValues] = React.useState({
    email: '',
    firstName: '',
    password: '',
    recovery: ''
  })

  const classes = useStyles()

  /*Funcion vincula el estado del componente con el valor de los campos*/
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const showDialog = message => {
    alert(message)
  }

  const [select, setSelect] = React.useState('freelancer')
  const [loading, setLoading] = React.useState(false)

  const handleSubmit = () => {
    
    let query = {
      email: values.email,
      nombre:values.firstName,
      password:values.password
    }
    query.rol = select


    if(esValido()){
      setLoading(true)

              axios({ method: 'post',
                      validateStatus: function(status) {
                        return status >= 200 && status < 500; 
                      },
                      url:`/register`, 
                      data: query})
                    .then(response =>{
                        console.log('registration res',response)
                        if(response.status === 200){
                          showDialog('El usuario se ha registrado correctamente')
                          props.history.push('/')
                        } 
                        else {
                          if(response.data.error !== undefined) {
                            showDialog('Error: '+response.data.error.errors[0].message)
                          } 
                        }
                    })
                    .catch(error => {console.log('error',error)
                      showDialog('Ha ocurrido un error, intente más tarde')
                    })
          
          setLoading(false)
      }

      
  }

  
  const esValido = () => {
    
    let valido = true
    
    if((values.email==="") || (values.firstName==="") || (values.password==="") || (values.recovery==="")){
      showDialog('Debe rellenar todos los campos')
      valido=false
    } else if(values.password!==values.recovery){
      showDialog('Las contraseñas no coinciden')
      valido=false
    } else if(values.email !== "" && !validateEmail(values.email)){
      valido=false
      showDialog('El correo introducido no es válido')
    }
    return valido
  }

  const validateEmail = (email)=> {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  

  const handleClick = (event, newSelect) => {
    setSelect(newSelect)
  }

  const children = [
    <ToggleButton value="freelancer" className={classes.button} on>
      Soy Freelancer
    </ToggleButton>,
    <ToggleButton value="contractor" className={classes.button}>
      Soy Contratista
    </ToggleButton>
  ]

 
    return (
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        {console.log(values)}
        <main>
          <Paper className={classes.mainFeaturedPost}>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}></Avatar>
              <Typography
                component="h3"
                variant="h5"
                align="center"
                gutterBottom>
                Registro
              </Typography>

            {loading?(<CircularProgress/>):(
            <>
              <Grid container spacing={2} justify="center">
                  <Grid item>
                    <ToggleButtonGroup
                      size="large"
                      value={select}
                      exclusive
                      onChange={handleClick}>
                      {children}
                    </ToggleButtonGroup>
                  </Grid>
                </Grid>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item>
                    <FormControl>
                      <InputLabel
                        shrink
                        htmlFor="bootstrap-input"
                        className={classes.text}>
                       { select=='freelancer'? 'Nombre Completo':'Nombre de Empresa'}
                      </InputLabel>
                      <BootstrapInput
                        id="firstName"
                        name="firstName"
                        onChange={handleChange('firstName')}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl>
                      <InputLabel
                        shrink
                        htmlFor="bootstrap-input"
                        className={classes.text}>
                        Correo Electrónico
                      </InputLabel>
                      <BootstrapInput
                        id="email"
                        name="email"
                        autoComplete="email"
                        onChange={handleChange('email')}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl>
                      <InputLabel
                        shrink
                        htmlFor="bootstrap-input"
                        className={classes.text}>
                        Contraseña
                      </InputLabel>
                      <BootstrapInput
                        id="password"
                        type="password"
                        onChange={handleChange('password')}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl>
                      <InputLabel
                        shrink
                        htmlFor="bootstrap-input"
                        className={classes.text}>
                        Confirmar contraseña
                      </InputLabel>
                      <BootstrapInput
                        id="confirmpassword"
                        type="password"
                        onChange={handleChange('recovery')}
                        name="recovery"
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                
                
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleSubmit}>
                  Registrarse
                </Button>
              

                <Grid container justify="center">
                  <Grid item>
                    <DomLink
                      to="/"
                      style={{ textDecoration: 'none', color: 'rgb(33,40,53)' }}>
                      <Link variant="body2" className={classes.text}>
                        ¿Ya tiene una cuenta? Inicia Sesión
                      </Link>
                    </DomLink>
                  </Grid>
                </Grid>
              </form>
              </>
              )}
            </div>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Paper>
        </main>
      </Container>
    )

}

export default Registration
