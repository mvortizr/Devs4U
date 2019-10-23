import React from 'react';
import clsx from 'clsx';
import {Typography, Drawer, AppBar, Toolbar, List, Divider, IconButton, Badge, Grid, CssBaseline, Container, Paper, Link, Button, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './ListaItemsFree';
import {Link as DomLink}from "react-router-dom";
import fotoPerfil from './images/fotoPerfil.jpg';

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
}));


export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

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
           <DomLink to="/profile/freelancer" style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
          <Button variant="contained" color="secondary" className={classes.button} >
            Guardar Cambios
          </Button>
          </DomLink>

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
              <div>
                <img src={fotoPerfil} />
              </div>
              <Typography variant="h6" gutterBottom>

                {/*Falta colocarle  un input de tipo file para adjuntar imagen de perfil*/}

                Adjuntar imagen
              </Typography>

              <Typography variant="h6" gutterBottom>
                Sobre mí:
              </Typography>

              <TextField
                variant="outlined"
                fullWidth
                id="personal"
                label="Información Personal"
              />
              <Divider />

              <Typography variant="h6" gutterBottom>
                Lenguajes de Programación que domino:
              </Typography>

              <Typography paragraph>
              <li className={classes.listItem}>
                <TextField
                variant="outlined"
                fullWidth
                id="lenguaje1"
                label="Lenguaje 1"
                />
              <Divider />
              </li>
              <li className={classes.listItem}>
                <TextField
                variant="outlined"
                fullWidth
                id="lenguaje2"
                label="Lenguaje 2"
                />
              </li>
              </Typography>

              <Typography variant="h6" gutterBottom>
                Idiomas:
              </Typography>

              <Typography paragraph>
              <li className={classes.listItem}>
                <TextField
                variant="outlined"
                fullWidth
                id="idioma2"
                label="Idioma 1"
                />
              </li>
              <li className={classes.listItem}>
                <TextField
                variant="outlined"
                fullWidth
                id="idioma2"
                label="Idioma 2"
                />
              </li>
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
                    <strong>Residencia:</strong> 
                    <TextField
                    variant="outlined"
                    fullWidth
                    id="residencia"
                    label="Caracas, Venezuela"
                    />
                </Typography>
                <Typography paragraph>
                    <strong>Horas de Trabajo:</strong> 
                    <TextField
                    variant="outlined"
                    fullWidth
                    id="horasTrabajo"
                    label="+40"
                    />
                </Typography>
                <Typography paragraph>
                    <strong>Experiencia:</strong>
                    <TextField
                    variant="outlined"
                    fullWidth
                    id="experiencia"
                    label="1 año"
                    />
                </Typography>
                  
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
