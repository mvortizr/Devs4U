import React from 'react';
import clsx from 'clsx';
import {Typography, Drawer, AppBar, Toolbar, List, Divider, IconButton, Badge, Grid, CssBaseline, Container, Paper, Link, Button, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './ListaItemsFree';
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Instagram from '@material-ui/icons/Instagram';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';

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
{/*
const [free, setFree] = React.useState('');
const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
const handleChange = event => {
  setFree(event.target.value);
};
 */}

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
}));

const archives = [
  'Trabajo 1',
  'Trabajo 2',
  'Trabajo 3',
];

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
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
  const[redirect, setRedirect]=React.useState(false);

    React.useEffect(() => {
       axios.post(`/profile/developer`)
            .then((response) => {
                 console.log('response perfil free modificar', response);
                 setUser(response.data.user);
            }, (error) => {
                console.log(error);
        });
     
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

  
  return (
    <div className={classes.root}>
      <CssBaseline />
      {redirect && <Redirect to={'/profile/freelancer'} push={true} />}
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
           
          <Button type="button" variant="contained" color="secondary" className={classes.button} onClick={handleModification} >
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
            <Grid item xs={12} md={8}>
              <TextField
                variant="outlined"
                fullWidth
                id="nombre"
                label="Nombre del Usuario"
              />
              
              <Divider />

              {/*
              <CardMedia
                   className={classes.cardMedia}
                   image="./images/fotoPerfil.jpg"
                   title="Image title"
              />
              */}

              <Typography variant="h6" gutterBottom>

                {/*Falta colocarle  un input de tipo file para adjuntar imagen de perfil*/}

                Adjuntar imagen
              </Typography>

              <Typography variant="h6" gutterBottom>
                Descripción Corta:
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                id="descripcion"
                label="Información Personal"
              />

              <Divider />

              <Typography variant="h6" gutterBottom>
                Sobre mí:
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                id="sobreMi"
                label="Información Personal"
              />

              <Divider />

              <Typography variant="h6" gutterBottom>
                Habilidades:
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                id="habilidades"
                label="habilidades"
              />
              <Divider />

              <Typography variant="h6" gutterBottom>
                Experiencia:
              </Typography>
              <Typography variant="h7" gutterBottom>
                Nombre de la Empresa:
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                label="Lorem Ipsum"
              />
              <Typography variant="h7" gutterBottom>
                Título del Cargo:
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                label="Lorem Ipsum"
              />
              <Typography variant="h9" gutterBottom>
                Período de Tiempo:
              </Typography>
              <Divider />
              
              <TextField
              id="outlined-number"
              label="Año de Inicio"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              />
              <TextField
              id="outlined-number"
              label="Año de Fin"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              />
              <Typography variant="h7" gutterBottom>
                Descripción:
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                label="Lorem Ipsum"
              />

              <Divider />
              
              <Typography variant="h6" gutterBottom>
                Educación:
              </Typography>
              <Typography variant="h7" gutterBottom>
                Nombre de la Institución:
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                label="Lorem Ipsum"
              />
              <Typography variant="h7" gutterBottom>
                Título Obtenido:
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                label="Lorem Ipsum"
              />
              <Typography variant="h9" gutterBottom>
                Período de Tiempo:   
              </Typography>
               {/*ARREGLAR DIVIDER PAR AQUE NO QUEDE TAN APRETADO EL ESPACIO*/}
              <Divider variant="middle" />
              <TextField
              id="outlined-number"
              label="Año de Inicio"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              />
              <TextField
              id="outlined-number"
              label="Año de Fin"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              />


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
                    label="Caracas, Venezuela"
                    />
                </Typography>
                <Typography paragraph>
                    Años de Experiencia
                    <TextField
                    variant="outlined"
                    fullWidth
                    id="horasTrabajo"
                    label="+40"
                    />
                </Typography>


                {/* 
                <FormControl className={classes.formControl}>
                <InputLabel>Tipo de Freelancer</InputLabel>
                <Select
                value={free}
                onChange={handleChange}
                >
                  <MenuItem value={10}>Desarrollador Web</MenuItem>
                  <MenuItem value={20}>Desarrollador de Móvil</MenuItem>
                  <MenuItem value={30}>Q/A</MenuItem>
                  <MenuItem value={40}>Otros</MenuItem>
                </Select>
                </FormControl>
                */}

                <Typography paragraph>
                    Idiomas:
                    <TextField
                    variant="outlined"
                    fullWidth
                    label=""
                    />
                </Typography>
                  
                <Typography paragraph>
                    Seniority:
                    <TextField
                    variant="outlined"
                    fullWidth
                    label=""
                    />
                </Typography>

                <Typography variant="h6" gutterBottom>
                  Links
                </Typography>

                <Instagram/>
                <TextField
                variant="outlined"
                fullWidth
                label="Instagram"
                />
                
                <Facebook/>
                <TextField
                variant="outlined"
                fullWidth
                label="Facebook"
                />

                <Twitter/>
                <TextField
                variant="outlined"
                fullWidth
                label="Twitter"
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