import React from 'react'
import {
  Typography,
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
import EliminarProyectoDialog from '../components/Dialog'
import { Link as DomLink } from 'react-router-dom'
import Header from './Header'
import PersonIcon from '@material-ui/icons/Person'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

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
    maxHeight: "180px",
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
    backgroundColor:"#FFC100",
    height: "20px"
},
  grid:{
    marginTop:"80px",
  },
  text: {
    marginRight: "15px"
  },
  text2: {
    marginLeft: "15px"
  },
}))

export default function ConsultPortfolio(props) {
  const classes = useStyles()
  var cards = [1, 2, 3, 4, 5]
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

if(props.type=="contractor"){
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header type="contractor"/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Proyectos Finalizados de Desarrollador 
          </Typography>
          {/* End hero unit */}
          <Grid container spacing={4} className={classes.grid}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={12}>
                <Card className={classes.card}>
                    <CardMedia
                      className={classes.media}
                      />
                    <CardContent className={classes.cardContent}>
                    <Typography content="h2" variant="h6"> 
                      <strong className={classes.text}>Proyecto</strong><PersonIcon /> Carlos Cristian Gomez<CheckCircleIcon className={classes.text2}/> Finalizado 
                      <DomLink to="/project/contractor" style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
                      <Button variant="contained" className={classes.text2}>
                        Ver 
                      </Button>
                      </DomLink>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Copyright />
      </main>
    </div>
  );
}else{
  if(props.type=="developer"){
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header type="developer"/>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container className={classes.cardGrid} maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Tus Proyectos Finalizados 
            </Typography>
            {/* End hero unit */}
            <Grid container spacing={4} className={classes.grid}>
              {cards.map(card => (
                <Grid item key={card} xs={12} sm={6} md={12}>
                  <Card className={classes.card}>
                      <CardMedia
                        className={classes.media}
                        />
                      <CardContent className={classes.cardContent}>
                      <Typography content="h2" variant="h6"> 
                        <strong className={classes.text}>Proyecto</strong><PersonIcon /> Carlos Cristian Gomez<CheckCircleIcon className={classes.text2}/> Finalizado 
                        <Button variant="contained" className={classes.text2}>
                          Ocultar de Portafolio 
                        </Button>
                        <DomLink to="/project/freelancer" style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
                        <Button variant="contained" className={classes.text2}>
                          Ver 
                        </Button>
                        </DomLink>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
          <Copyright />
        </main>
      </div>
    );
  }else{
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header type="developer"/>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container className={classes.cardGrid} maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Proyectos Finalizados de Desarrollador 
            </Typography>
            {/* End hero unit */}
            <Grid container spacing={4} className={classes.grid}>
              {cards.map(card => (
                <Grid item key={card} xs={12} sm={6} md={12}>
                  <Card className={classes.card}>
                      <CardMedia
                        className={classes.media}
                        />
                      <CardContent className={classes.cardContent}>
                      <Typography content="h2" variant="h6"> 
                        <strong className={classes.text}>Proyecto</strong><PersonIcon /> Carlos Cristian Gomez<CheckCircleIcon className={classes.text2}/> Finalizado 
                        <DomLink to="/project/freelancer" style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
                        <Button variant="contained" className={classes.text2}>
                          Ver 
                        </Button>
                        </DomLink>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
          <Copyright />
        </main>
      </div>
    );
  }
}
}
