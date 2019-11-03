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
  Link,
  Button,
  TextField
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Header from './Header'

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
    backgroundColor: theme.palette.background.paper,
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

  button1: {
    marginRight: '350px'
  },
  button2: {
    margin: theme.spacing(1)
  },
  grid:{
    marginTop:"50px"
  }
}))

export default function CreateProject() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header type="contractor"/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Crear Proyecto
          </Typography>
          <Grid container spacing={5} className={classes.mainGrid} className={classes.grid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                Nombre del Proyecto:
              </Typography>
              <TextField variant="outlined" fullWidth id="nombre" />
              <Divider />

              {/*
              <CardMedia
                   className={classes.cardMedia}
                   image="./images/fotoPerfil.jpg"
                   title="Image title"
              />
              */}

              <Typography variant="h6" gutterBottom>
                Tipo de proyecto :
              </Typography>
              <TextField variant="outlined" fullWidth id="type" />
              <Typography variant="h6" gutterBottom>
                Disponibilidad Referida:
              </Typography>
              <TextField variant="outlined" fullWidth id="dispon" />
              <Divider />
              <Typography variant="h6" gutterBottom>
                Descripción:
              </Typography>
              <TextField
                id="descrp"
                multiline
                rows="4"
                margin="normal"
                variant="outlined"
                fullWidth
              />
              <Typography variant="h6" gutterBottom>
                Tecnologías a usar:
              </Typography>
              <TextField variant="outlined" fullWidth id="tecno" />
              <Typography variant="h6" gutterBottom>
                Entregables:
              </Typography>
              <TextField variant="outlined" fullWidth id="entregables" />
              <Typography variant="h6" gutterBottom>
                Datos Adicionales:
              </Typography>
              <TextField variant="outlined" fullWidth id="adicional" />
              <Button
                variant="contained"
                color="inherit"
                className={classes.button1}
                href="/project/manage/contractor">
                Cancelar
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button2}
                href="/project/manage/contractor">
                Crear
              </Button>
            </Grid>
          </Grid>
        </Container>
        <Copyright />
      </main>
    </div>
  )
}
