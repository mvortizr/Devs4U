import React from 'react';
import clsx from 'clsx';
import {Typography, Drawer, AppBar, Toolbar, List, Divider, IconButton, Badge, Grid, CssBaseline, Container, Paper, Link, Button, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './ListaItemsFree';
import { mainListItemsC, secondaryListItemsC } from './ListaItemsCont';
import axios from 'axios'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Instagram from '@material-ui/icons/Instagram';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import fotoPerfil from './images/fotoPerfil.png';

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

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  formControl: {
    margin: theme.spacing(1),
    width: '250px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  buttonCan:{
    backgroundColor: "#FF0000",
    marginRight: "50px",
    color: "#ffff"
  },
  buttonSave:{
    backgroundColor: "#516FDE",
    color: "#ffff",
    marginRight: "50px",
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const reviews = [1, 2];
  const [open, setOpen] = React.useState(true);
  const [value, setValue]=React.useState(4.8);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  /*FRONTEND INFO .. aqui debe mostrar los datos del usuario primero dentro de los textfields,
  tienen que hacer que cada campo este linkeado a una variable del estado (ver registro),al usuario 
  hacer click en el boton guardar cambios, ese estado se envia a el backend, les dejo una muestra del formato de eso
  en dummy data*/ 

  const dummyDataFree={
    firstName:'hola',
    lastName:'como',
    aboutMe: 'estas',
    photo:'blabalbal',
    residence:'bababa',
    socialNetworks: JSON.stringify({facebook:'facebook.com'}), //json
    available:'yes papo',
    experience:'nadaaa',
    residence:'mi casita',
    web: 'aynotengo.com',
    developerType:'chimbo',
    languages:['ingles','espanish'],
    skills:['comer mocos', 'react'],
    workHours: 3,
  }

  const [user, setUser] = React.useState({});
  const [newUserInfo, setNewUserInfo] = React.useState({});
  const [redirect, setRedirect]=React.useState(false);
  const [type, setType] = React.useState('');
  const inputLabel = React.useRef(null); 

  React.useEffect(() => {
      axios({ method: 'get',
        validateStatus: function(status) {
          return status >= 200 && status < 500; 
        },
        url:`/profile`, 
        withCredentials:true
      })
      .then(response =>{
          console.log('consultar res',response)
          if(response.status === 200){
            setUser(response.data[0]) 
          } 
          
      })
      .catch(error => {
        console.log('error',error)
      })
     
    }, []);

  const handleModification = () =>{
    axios.post('/edit', dummyDataFree)
            .then((response) => {
                 console.log('response perfil free modify', response);

                if(response.data.success){
                   //FRONTEND INFO redireccionar como lo hice en el login
                   setRedirect(true)
                   alert('Ha modificado su perfil con exito')
                 } else {
                  alert('Hubo un error en su modificacion')
                 }
            }, (error) => {
                console.log(error);
        });
  }

  const handleChange = event => {
    setType(event.target.value);
  };

  function validaNumericos(event) {
    if(event.charCode >=1950 && event.charCode <= 2100){
      return true;
     }
     return false;        
  }

 
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Perfil
            </Typography>
            <Button type="button" variant="contained" className={classes.buttonCan}>
              Cancelar
            </Button>
            <Button type="button" variant="contained" className={classes.buttonSave} onClick={handleModification} >
              Guardar Cambios
            </Button>
            <IconButton color="inherit">
              {/*badgeContent muestra la cantidad de notificaciones*/}
              <Badge badgeContent={0} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={5} className={classes.mainGrid}>
              {/* Main content */}
              <Grid item xs={12} md={4}>
                <img src={fotoPerfil}/>
                <Typography variant="h8" gutterBottom>
                  {/*Cambiar por link para adjuntar imagen */}
                  Cambiar foto de perfil
                </Typography>
              </Grid>
              <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                  Nombre de Usuario:
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="nombre"
                  defaultValue="Nombre del Usuario"
                  inputProps={{ maxLength: 22 }}
                />
                <Divider />
                <Typography variant="h6" gutterBottom>
                  Descripción Corta:
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="descripcion"
                  defaultValue="Información Personal"
                  inputProps={{ maxLength: 22 }}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Divider/>
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography variant="h6" gutterBottom>
                  Sobre mí:
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="sobreMi"
                  defaultValue="Información Personal"
                  inputProps={{ maxLength: 180 }}
                />
                <Divider />
                <Typography variant="h6" gutterBottom>
                <br/>
                  Habilidades:
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="habilidades"
                  defaultValue="habilidad1, habilidad2, ..."
                  inputProps={{ maxLength: 180 }}
                />
                <Divider />
                <Typography variant="h6" gutterBottom>
                <br/>
                  Experiencia:
                </Typography>
                <Typography variant="h7" gutterBottom>
                  Nombre de la Empresa:
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  defaultValue="Lorem ipsum"
                  inputProps={{ maxLength: 22 }}
                />
                <Typography variant="h7" gutterBottom>
                  Título del Cargo:
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  defaultValue="Lorem ipsum"
                  inputProps={{ maxLength: 22 }}
                />
                <Typography variant="h9" gutterBottom>
                  Período de Tiempo:
                </Typography>





                {/*HACER VALIDACIONES DE FECHA */}
                <Divider />
                <TextField
                id="outlined-number"
                defaultValue="0"
                inputProps={{ maxLength: 4 }}
                type="number"
                min="0"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                />
                <TextField
                id="outlined-number"
                defaultValue="0"
                inputProps={{ maxLength: 4 }}
                type="number"
                min="0"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                />
                <br/>
                <Typography variant="h7" gutterBottom>
                  Descripción:
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  defaultValue="Lorem ipsum"
                  inputProps={{ maxLength: 22 }}
                />
                <Divider />
                <Typography variant="h6" gutterBottom>
                <br/>
                  Educación:
                </Typography>
                <Typography variant="h7" gutterBottom>
                  Nombre de la Institución:
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  defaultValue="Lorem ipsum"
                  inputProps={{ maxLength: 22 }}
                />
                <Typography variant="h7" gutterBottom>
                  Título Obtenido:
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  defaultValue="Lorem ipsum"
                  inputProps={{ maxLength: 22 }}
                />
                <Typography variant="h9" gutterBottom>
                  Período de Tiempo:   
                </Typography>
                <Divider variant="middle" />
                <TextField
                id="outlined-number"
                defaultValue="0"
                inputProps={{ maxLength: 4 }}
                type="number"
                min="0"
                onkeypress='return validaNumericos(event)'
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                />
                <TextField
                id="outlined-number"
                defaultValue="0"
                inputProps={{ maxLength: 4 }}
                type="number"
                min="0"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                />
              </Grid>
              <Grid>
                <Divider orientation="vertical"/>
              </Grid>
              {/* End main content */}
              {/* Sidebar */}
              <Grid item xs={12} md={4}>
                <Paper elevation={0} className={classes.sidebarAboutBox}>
                  <Typography variant="h6" gutterBottom>
                    Información General
                  </Typography>
                  <Typography paragraph>
                      País y Ciudad 
                      <TextField
                      variant="outlined"
                      fullWidth
                      defaultValue="Caracas, Venezuela"
                      inputProps={{ maxLength: 22 }}
                      />
                  </Typography>
                  <Typography paragraph>
                      Años de Experiencia
                      <TextField
                      variant="outlined"
                      fullWidth
                      id="horasTrabajo"
                      type="number"
                      defaultValue="99"
                      inputProps={{ maxLength: 2 }}
                      />
                  </Typography>
                  <FormControl className={classes.formControl}>
                    <InputLabel shrink id="label">
                      Tipo de freelancer
                    </InputLabel>
                    <Select
                      labelId="label"
                      id="typefreelancer"
                      value={type}
                      onChange={handleChange}
                      displayEmpty
                      className={classes.selectEmpty}
                    >
                      <MenuItem value={1}>Web</MenuItem>
                      <MenuItem value={2}>Desarrollador Móvil</MenuItem>
                      <MenuItem value={3}>Q/A</MenuItem>
                      <MenuItem value={4}>Otros</MenuItem>
                    </Select>
                  </FormControl>
                  <Typography paragraph>
                      Idiomas:
                      <TextField
                      variant="outlined"
                      fullWidth
                      defaultValue="Muchos xd"
                      inputProps={{ maxLength: 22 }}
                      />
                  </Typography>
                  <FormControl className={classes.formControl}>
                    <InputLabel shrink id="label">
                      Seniority
                    </InputLabel>
                    <Select
                      labelId="label"
                      id="typefreelancer"
                      value={type}
                      onChange={handleChange}
                      displayEmpty
                      className={classes.selectEmpty}
                    >
                      <MenuItem value={1}>Junior</MenuItem>
                      <MenuItem value={2}>Mid Level</MenuItem>
                      <MenuItem value={3}>Senior</MenuItem>
                      <MenuItem value={4}>Experto</MenuItem>
                    </Select>
                  </FormControl>
                  <Typography variant="h6" gutterBottom>
                    Links
                  </Typography>
                  <Instagram/>
                  <TextField
                  variant="outlined"
                  fullWidth
                  defaultValue="Instagram"
                  inputProps={{ maxLength: 22 }}
                  />
                  <Facebook/>
                  <TextField
                  variant="outlined"
                  fullWidth
                  defaultValue="Facebook"
                  inputProps={{ maxLength: 22 }}
                  />
                  <Twitter/>
                  <TextField
                  variant="outlined"
                  fullWidth
                  defaultValue="Twitter"
                  inputProps={{ maxLength: 22 }}
                  />
                </Paper>
              </Grid>
              {/* End sidebar */}
            </Grid>
          </Container>
          <Copyright />
        </main>
      </div>
    );
  
 
}