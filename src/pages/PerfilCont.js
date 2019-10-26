import React from 'react'
import clsx from 'clsx'
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
  Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { mainListItems, secondaryListItems } from './ListaItemsCont'
import { Link as DomLink, Redirect } from 'react-router-dom'
import EliminarPerfilDialog from '../components/Dialog'
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

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
      duration: theme.transitions.duration.leavingScreen
    })
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
    overflow: 'auto'
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
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
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
  }
}))

export default function Dashboard() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
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

if(user){
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
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}>
            Perfil
          </Typography>
          <DomLink
            to="/profile/modify/cont"
            style={{ textDecoration: 'none', color: 'rgb(33,40,53)' }}>
            <Button variant="contained" className={classes.button}>
              Modificar Perfil
            </Button>
          </DomLink>

          <Button
            variant="contained"
            className={classes.button}
            onClick={handleClickOpenDialog}>
            Eliminar Perfil
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
              <Typography variant="h4" gutterBottom>
                Nombre de la Empresa
                {user.user.firstName + ' ' +user.user.lastName}
              </Typography>
              <Divider />
              <Typography variant="h6" gutterBottom>
                <strong>Sobre mí:</strong>
              </Typography>

              <Typography paragraph>
                Información general de la empresa
                {user.user.aboutMe}
              </Typography>

              <Typography variant="h6" gutterBottom>
                <strong>Tipos de Trabajo que busco:</strong>
              </Typography>

              <Typography paragraph>
                Especificación de los trabajos que esta interesado la empresa
                {user.contractor.workSearch}
              </Typography>

              <Typography variant="h6" gutterBottom>
                <strong>Correo Electrónico:</strong>
              </Typography>

              <Typography paragraph>
                contratista@example.com
              </Typography>

              <Typography variant="h6" gutterBottom>
                <strong>Redes Sociales:</strong>
              </Typography>
              <Typography paragraph>
                Twitter: @Contratista
              </Typography>
              <Typography paragraph>
                Instagram: @Contratista
              </Typography>
              <Typography paragraph>
                Facebook: Contratista
              </Typography>

            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  Información General
                </Typography>

                <Typography paragraph>
                  <strong>País:</strong> 
                  País donde se encuentra la sede principal de la empresa
                  {user.user.residence}
                </Typography>
                <Typography paragraph>
                  <strong>Tipo de Empresa:</strong> 
                  Que tipo de Empresa es 
                  {user.contractor.enterprise}
                </Typography>
                <Typography paragraph>
                  <strong>Experiencia:</strong> 
                  La experiencia que tiene la empresa 
                  {user.user.experience}
                </Typography>
              </Paper>
            </Grid>
            {/* End sidebar */}
          </Grid>
          <EliminarPerfilDialog
            content="¿Está seguro que deseas eliminar tu perfil?"
            title="Eliminar Perfil"
            handleCloseDialog={handleCloseDialog}
            open={openDialog}
          />
        </Container>
        <Copyright />
      </main>
    </div>
  );
} else {
    return  <CircularProgress />;
  }
}
