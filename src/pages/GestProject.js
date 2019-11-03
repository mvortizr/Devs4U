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
  Card,
  CardActions,
  CardContent,
  Button,
  CardMedia
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Header from './Header'
import EliminarProyectoDialog from '../components/Dialog'
import { Link as DomLink } from 'react-router-dom'

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
  button: {
    margin: theme.spacing(1)
  },
  delete: {
    color: '#DC0300 '
  },
  media:{
      backgroundColor:"#FF5100",
      height: "50px"
  },
grid:{
    marginTop:"80px"
  }
}))

export default function GestProject(props) {
  const classes = useStyles()
  var cards = [1, 2, 3, 4, 5, 6]
  const [open, setOpen] = React.useState(true)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const [openDialog, setOpenDialog] = React.useState(false)
  
  const handleClickOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }
if(props.type=="contractor"){
    return (
        <div className={classes.root}>
          <CssBaseline />
          <Header type="contractor"/>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container className={classes.cardGrid} maxWidth="md">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Mi Proyectos
              </Typography>
              {/* End hero unit */}
              <Grid container spacing={4} className={classes.grid}>
                {cards.map(card => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.media}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Título del Proyecto
                        </Typography>
                        <Typography>Etapa: Negociacion</Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          <DomLink
                            to="/project/contractor"
                            style={{
                              textDecoration: 'none',
                              color: 'rgb(33,40,53)'
                            }}>
                            <Link variant="body2">Consultar</Link>
                          </DomLink>
                        </Button>
                        <DomLink
                          to="/project/cont/edit"
                          style={{
                            textDecoration: 'none',
                            color: 'rgb(33,40,53)'
                          }}>
                          <Button size="small" color="primary">
                            <Link variant="body2">Modificar</Link>
                          </Button>
                        </DomLink>
                        <Button
                          size="small"
                          className={classes.delete}
                          onClick={handleClickOpenDialog}>
                          <Link variant="body2" className={classes.delete}>
                            Cancelar
                          </Link>
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))} 
              </Grid>
            </Container>
            <Copyright />
            <EliminarProyectoDialog
              content="¿Está seguro que desea cancelar el proyecto?"
              title="Eliminar proyecto"
              handleCloseDialog={handleCloseDialog}
              open={openDialog}
            />
          </main>
        </div>
      )    
}
else{
    return (
    <div className={classes.root}>
      <CssBaseline />
      <Header type="developer"/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.cardGrid} maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Mis Proyectos
            </Typography>
            {/* End hero unit */}
            <Grid container spacing={4} className={classes.grid}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                   />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Título del Proyecto
                    </Typography>
                    <Typography>Descripción del proyecto.</Typography>
                  </CardContent>
                  <CardActions>
                    <DomLink
                      to="/project/manage/freelancer/consult"
                      style={{
                        textDecoration: 'none',
                        color: 'rgb(33,40,53)'
                      }}>
                      <Button size="small" color="primary">
                        <Link variant="body2">Consultar</Link>
                      </Button>
                    </DomLink>
                    <Button
                      size="small"
                      className={classes.delete}
                      onClick={handleClickOpenDialog}>
                      <Link variant="body2" className={classes.delete}>
                        Renunciar
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Copyright />
        <EliminarProyectoDialog
          content="¿Está seguro que desea renunciar a el proyecto?"
          title="Renunciar a proyecto"
          handleCloseDialog={handleCloseDialog}
          open={openDialog}
        />
      </main>
    </div>
  )
}
}
