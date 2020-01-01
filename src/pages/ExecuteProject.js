import React from 'react'
import {
  Typography,
  Grid,
  CssBaseline,
  Container,
  Link,
  Button,
  Divider,
  Card,
  CardContent,
  Checkbox 
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles'
import EliminarProyectoDialog from '../components/Dialog'
import { Link as DomLink } from 'react-router-dom'
import Header from './Header'
import PersonIcon from '@material-ui/icons/Person'

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
  media:{
    backgroundColor:"#FFC100",
    height: "20px"
},
  grid:{
    marginTop:"30px",
  },
  text: {
    marginLeft: "30px"
  },
  but: {
    marginTop: "30px",
    marginLeft: "20px"
  },
  but2: {
    marginTop: "20px",
    marginLeft: "500px"
  },
}))

export default function ExecuteProject(props) {
    const classes = useStyles()
    var cards = [1, 2, 3, 4, 5]
    const [checked, setChecked] = React.useState(true);
    const [value, setValue] = React.useState(2);

    const handleChange = event => {
        setChecked(event.target.checked);
    };

    if(props.type=="contractor"){
        return (
            <div className={classes.root}>
                <CssBaseline />
                <Header type="contractor"/>
                <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid item xs={12} md={4}>
                        <Typography component="h1" variant="h5" color="textPrimary" gutterBottom>
                            Etapa: Abierto 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Typography component="h1" variant="h6" color="textPrimary" gutterBottom>
                            Para promover el proyecto a la etapa de ejecución, seleccione un desarrollador encargado entre la lista de postulantes 
                        </Typography>
                        <br/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Divider/>
                    </Grid>
                    <Button variant="contained" color="primary" className={classes.but}>
                        Comenzar ejecución
                    </Button>
                    <Button variant="contained" className={classes.but2}>
                        Cancelar
                    </Button>
                    <Grid container spacing={4} className={classes.grid}>
                    {cards.map(card => (
                        <Grid item key={card} xs={12} sm={6} md={12}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                            <Typography content="h2" variant="h6"> 
                                <Checkbox
                                    onChange={handleChange}
                                    value="secundary"
                                    color="primary"
                                />
                                <PersonIcon className={classes.text}/> Carlos Cristian Gomez 
                                <Rating value={value} readOnly className={classes.text}/>
                                <Button variant="contained" className={classes.text}>
                                    Ver Portafolio
                                </Button>
                                <Button variant="contained" className={classes.text}>
                                    Ver Perfil
                                </Button>
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
                    <Grid item xs={12} md={4}>
                        <Typography component="h1" variant="h5" color="textPrimary" gutterBottom>
                            Etapa: Abierto 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Divider/>
                    </Grid>
                    <Grid container spacing={4} className={classes.grid}>
                    {cards.map(card => (
                        <Grid item key={card} xs={12} sm={6} md={12}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                            <Typography content="h2" variant="h6"> 
                                <PersonIcon className={classes.text}/> Carlos Cristian Gomez 
                                <Rating value={value} readOnly className={classes.text}/>
                                <Button variant="contained" className={classes.text}>
                                    Ver Portafolio
                                </Button>
                                <Button variant="contained" className={classes.text}>
                                    Ver Perfil
                                </Button>
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
