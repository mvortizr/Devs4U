import React from 'react';
import clsx from 'clsx';
import {
  Typography,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Divider,
  IconButton,
  Badge,
  Grid,
  CssBaseline,
  Container,
  Paper,
  Link,
  Button,
  Box,
  Chip,
  Card,
  CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItemsC, secondaryListItemsC } from './ListaItemsCont';
import { mainListItems, secondaryListItems } from './ListaItemsFree';
import { Link as DomLink, Redirect } from 'react-router-dom';
import EliminarPerfilDialog from '../components/Dialog';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import fotoPerfil from './images/fotoPerfil.png';
import Rating from '@material-ui/lab/Rating';
// import CreateIcon from '@material-ui/icons/CreateIcon'
// import ClearIcon from '@material-ui/icons/ClearIcon'

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
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  root2:{
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  appBarFree: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor:'#299DE8'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: 'none'
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    backgroundColor: '#F0F1F4'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 240
  },
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    maxWidth: 400,
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },

  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },
  button: {
    margin: theme.spacing(1)
  },
  buttonMod: {
    color:"#ffff",
    backgroundColor: "#0083FF",
    margin: theme.spacing(1)
  },
  buttonDel: {
    color:"#ffff",
    backgroundColor: "#FF0000",
    margin: theme.spacing(1),
    marginRight: "50px"
  },
}))

export default function ConsultProfile(props) {
  const classes = useStyles()
  const reviews = [1, 2];
  const [open, setOpen] = React.useState(true)
  const [value, setValue]=React.useState(4.8);
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  //Dialog Eliminar
  const [openDialog, setOpenDialog] = React.useState(false)
  //const[selectedProject, setSelectedProject] = React.useState('');

  const handleClickOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  /*FRONTEND INFO .. Se esta haciendo una llamada al backend que devuelven los datos del usuario,
  rendericen los componentes solo cuando tengan la respuesta del user muestren los datos en sus textfields
  correspondientes*/ 


  const [user, setUser] = React.useState(undefined);

  React.useEffect(() => {
       axios.post(`/profile/contractor`)
            .then((response) => {
                 console.log('response perfil contractor', response);
                 setUser(response.data);
            }, (error) => {
                console.log(error);
        });
     
    }, []);

    const[redirect, setRedirect]=React.useState(false);

    const handleDeleteProfile =() => {
      axios.post(`/delete`)
              .then((response) => {
                   console.log('response delete', response);
                   setRedirect(true);
                   setOpenDialog(false);
              }, (error) => {
                  console.log(error);
      });
    };

    if(props.type=="contractor"){
        // if(user){
            return (
              <div className={classes.root}>
                <CssBaseline />
                {console.log('user', user)}
                <AppBar
                    position="absolute"
                    className={clsx(classes.appBar, open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(
                        classes.menuButton,
                        open && classes.menuButtonHidden
                        )}>
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h4" color="inherit" noWrap className={classes.title}>
                      Perfil
                    </Typography>
                    <DomLink
                        to="/profile/modify/cont"
                        style={{ textDecoration: 'none', color: 'rgb(33,40,53)' }}>
                        <Button variant="contained" className={classes.buttonMod}>
                          Modificar
                        </Button>
                    </DomLink>
                    <Button
                        variant="contained"
                        className={classes.buttonDel}
                        onClick={handleClickOpenDialog}>
                        Eliminar
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
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
                    }}
                    open={open}>
                    <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                    </div>
                    <Divider />
                    <List>{mainListItemsC}</List>
                    <List>{secondaryListItemsC}</List>
                </Drawer>
                <main className={classes.content}>
                  <div className={classes.appBarSpacer} />
                  <Container className={classes.cardGrid} maxWidth="md">
                  <Grid container spacing={5} className={classes.mainGrid}>
                      {/* Main content */}
                      <Grid item xs={12} md={4}>
                        <img src={fotoPerfil}/>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        <Typography variant="h4" gutterBottom>
                          Nombre del Contratista
                          {/* {user.user.firstName + ' ' +user.user.lastName} */}
                        </Typography>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                          <Rating name="reputation" value={value} readOnly />
                        </Box>
                        <Typography paragraph>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Divider/>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        <Typography variant="h6" gutterBottom>
                          <strong>Sobre mí</strong>
                        </Typography>
                        <Typography paragraph>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. 
                          Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                          Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          {/* {user.user.aboutMe} */}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Divider orientation="vertical"/>
                      </Grid>
                      {/* End main content */}
                      {/* Sidebar */}
                      <Grid item xs={12} md={4}>
                        <Typography paragraph>
                          <strong>Residencia</strong>
                        </Typography>
                        <Typography paragraph>
                          Caracas, Venezuela
                          {/* {user.user.residence} */}
                        </Typography>
                        <Divider />
                        <Typography paragraph>
                          <br/>
                          <strong>Idiomas</strong> 
                        </Typography>
                        <Typography paragraph>
                          Ingles, Español
                          {/* {user.developer.developerType} */}
                        </Typography>
                      </Grid>
                      {/* End sidebar */}
                    </Grid>
                    <br/>
                    <br/>
                    <Grid item xs={12} md={12}>
                      <Divider/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Typography variant="h6" gutterBottom>
                        <br/>
                        <strong>Reviews</strong>
                      </Typography> 
                      <Container className={classes.cardGrid} maxWidth="md">
                      <Grid container spacing={4}>
                        {reviews.map(reviews => (
                          <Grid item key={reviews} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                              <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                  <strong>María V Ortiz</strong>
                                </Typography>
                                <br />
                                <Typography>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        ))}
                      </Grid>
                    </Container>
                    </Grid>
                    <EliminarPerfilDialog content="¿Está seguro que deseas eliminar tu perfil?" title="Eliminar Perfil" handleCloseDialog={handleCloseDialog} handleDeleteProfile={handleDeleteProfile} open={openDialog}/>
                  </Container>
                  <Copyright />
                </main>
              </div>
            );
        // } else {
        //     return  <CircularProgress />;
        //   }
    }
    else{
      // if(user){

        return (
        
          <div className={classes.root}>
            <CssBaseline />
            {console.log('user perfil',user)}
             {redirect && <Redirect to={'/'} push={true} />}
            <AppBar position="absolute" className={clsx(classes.appBarFree, open && classes.appBarShift)}>
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
                <Typography component="h1" variant="h4" color="inherit" noWrap className={classes.title}>
                  Perfil
                </Typography>
                <DomLink to="/profile/modify/free" style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
                <Button variant="contained" className={classes.buttonMod} >
                  Modificar 
                </Button>
                </DomLink>
                <Button variant="contained" className={classes.buttonDel} onClick={handleClickOpenDialog}>
                  Eliminar 
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
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Typography variant="h4" gutterBottom>
                      Nombre del Desarrollador
                      {/* {user.user.firstName + ' ' +user.user.lastName} */}
                    </Typography>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                      <Rating name="reputation" value={value} readOnly />
                    </Box>
                    <Typography paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Divider/>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Typography variant="h6" gutterBottom>
                      <strong>Sobre mí</strong>
                    </Typography>
                    <Typography paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. 
                      Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      {/* {user.user.aboutMe} */}
                    </Typography>
                    <Divider />
                   {/* 
                    <DomLink to="#" style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
                    <Button variant="contained" color="primary" className={classes.button} >
                      Visitar Web
                    </Button>
                    </DomLink>
                    <Divider />
                    */}
                    <Typography variant="h6" gutterBottom>
                      <br/>
                      <strong>Habilidades</strong>
                    </Typography>
                    <div className={classes.root2}>
                      <Chip label="HTML"/>
                      <Chip label="CSS"/>
                      <Chip label="Bootstrap"/>
                      <Chip label="Web Design"/>
                      <Chip label="C++"/>
                      <Chip label="Python"/>
                      <Chip label="PHP"/>
                      <Chip label="UML"/>
                      <Chip label="AdobeXD"/>
                      <Chip label="Android"/>
                      <Chip label="XML"/>
                      <Chip label="R"/>
                      <Chip label="Hadoop"/>
                      <Chip label="COBOL"/>
                      <Chip label="C#"/>
                    </div>
                    <br/>
                    <Divider />
                    <Typography variant="h6" gutterBottom>
                      <br/>
                      <strong>Experiencia</strong>
                    </Typography>
                    <Typography paragraph>
                      <strong>Empresa Polar</strong><br/>
                      Junior Web Developer  2018-Actualidad<br/>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                    </Typography>
                    <Divider />
                    <Typography variant="h6" gutterBottom>
                      <br/>
                      <strong>Educación</strong>
                    </Typography>
                    <Typography paragraph>
                      Universidad Católica Andrés Bello: Ingeniería Informática 2013-2019
                    </Typography>
                  </Grid>
                  <Grid>
                    <Divider orientation="vertical"/>
                  </Grid>
                  {/* End main content */}
                  {/* Sidebar */}
                  <Grid item xs={12} md={4}>
                    <Typography paragraph>
                      <strong>Residencia</strong>
                    </Typography>
                    <Typography paragraph>
                      Caracas, Venezuela
                      {/* {user.user.residence} */}
                    </Typography>
                    <Divider />
                    <Typography paragraph>
                      <br/>
                      <strong>Experiencia</strong> 
                    </Typography>
                    <Typography paragraph>
                      6 años
                      {/* {user.developer.workHours} */}
                    </Typography>
                    <Divider />
                    <Typography paragraph>
                      <br/>
                      <strong>Tipo de Freelancer</strong> 
                    </Typography>
                    <Typography paragraph>
                      Desarrollador de Android
                      {/* {user.user.experience} */}
                    </Typography>
                    <Divider />
                    <Typography paragraph>
                      <br/>
                      <strong>Idiomas</strong> 
                    </Typography>
                    <Typography paragraph>
                      Ingles, Español
                      {/* {user.developer.developerType} */}
                    </Typography>
                    <Divider />
                    <Typography paragraph>
                      <br/>
                      <strong>Seniority</strong> 
                    </Typography>
                    <Typography paragraph>
                      Mid-Level
                    </Typography>
                    <Divider />
                    <Typography paragraph>
                      <br/>
                      <strong>Estadísticas</strong> 
                    </Typography>
                    <Typography paragraph>
                      13 Proyectos Culminados
                    </Typography><Typography paragraph>
                      2 Proyectos en Curso
                    </Typography>
                    <Typography paragraph>
                      4.8 Reputación
                    </Typography>
                  </Grid>
                  {/* End sidebar */}
                </Grid>
                <br/>
                <br/>
                <Grid item xs={12} md={12}>
                  <Divider/>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography variant="h6" gutterBottom>
                    <br/>
                    <strong>Reviews</strong>
                  </Typography> 
                  <Container className={classes.cardGrid} maxWidth="md">
                  <Grid container spacing={4}>
                    {reviews.map(reviews => (
                      <Grid item key={reviews} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                          <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                              <strong>María V Ortiz</strong>
                            </Typography>
                            <br />
                            <Typography>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Container>
                </Grid>
                <EliminarPerfilDialog content="¿Está seguro que deseas eliminar tu perfil?" title="Eliminar Perfil" handleCloseDialog={handleCloseDialog} handleDeleteProfile={handleDeleteProfile} open={openDialog}/>
              </Container>
              <Copyright />
            </main>
          </div>
        )
      // } else {
      //     return  <CircularProgress />;
      //   }
    }
}

