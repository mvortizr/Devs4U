import React from 'react'

import {
  Typography,
  CssBaseline,
  Container,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from './Header'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
          Devs4U{' '}
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
  }
}))

export default function Dashboard(props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)

  let history = useHistory()

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }


  const [devs,setDevs] = React.useState(undefined);
  const [projects,setProjects] = React.useState(undefined);

  const handleLogOut = () => {
    console.log('logging out frontend')
    axios.post('/logout').then(
      () => {
        history.push('/')
      },
      error => {
        console.log(error)
      }
    )
  }

  React.useEffect(() => {
       axios.post(`/user/see/all`)
            .then((response) => {
                 console.log('response perfil', response.data);
                 setDevs(response.data);
            }, (error) => {
                console.log(error);
        });
     
    }, []);

if(props.type=="contractor"){
    // if(devs){
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header type="contractor"/>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            {/* <Grid container spacing={4}> */}
              {/*
                En la plantilla original, para que salieran varios "trabajos", colocaron:
                {cards.map(card => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    ...
                  </Grid>
                ))};*/}
              {/* {devs.map(card => (
            
              <Grid item xs={8} sm={6} md={6}>
                <Card className={classes.card} key={card.id}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.firstName + ' ' + card.lastName}
                    </Typography>
                    <Typography>
                      {card.aboutMe}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <DomLink
                      to={{pathname:`/profile/consult/freelancer/${card.id}`, idDev:card.id}}

                      style={{ textDecoration: 'none', color: 'rgb(33,40,53)' }}>
                      <Button size="small" color="primary">
                        Visitar Perfil
                      </Button>
                    </DomLink>
                  </CardActions>
                </Card>
              </Grid>
              ))}
            </Grid>  */}
          </Container>
          <Copyright />
        </main>
      </div>
    );
    // } 
    // else{
    //   return <CircularProgress />;
    // }
}
else{
    // if(projects){
        return (
          <div className={classes.root}>
            <CssBaseline />
            <Header type="developer"/>
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                {/* <Grid container spacing={4}> */}
                  {/*
                    En la plantilla original, para que salieran varios "trabajos", colocaron:
                    {cards.map(card => (
                      <Grid item key={card} xs={12} sm={6} md={4}>
                        ...
                      </Grid>
                    ))};*/}
                 {/* {projects.map(card => ( 
                 
                  <Grid item xs={8} sm={6} md={6}>
                    <Card className={classes.card} key={card.id}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/random"
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {card.name}
                        </Typography>
                        <Typography>
                          {card.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <DomLink
                          to={{pathname:`/project/freelancer/${card.id}`, idPost:card.id}}
      
                          style={{ textDecoration: 'none', color: 'rgb(33,40,53)' }}>
                          <Button size="small" color="primary">
                            Más Información
                          </Button>
                        </DomLink>
                      </CardActions>
                    </Card>
                  </Grid>
                  ))}
                 </Grid> */}
              </Container>
              <Copyright />
            </main>
          </div>
        );
        // } 
        // else{
        //   return <CircularProgress />;
        // }
    }
}
