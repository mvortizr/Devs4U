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
import CircularProgress from '@material-ui/core/CircularProgress';
import ProjectPagination from '../components/Pagination';
import axios from 'axios'


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
    flexGrow: 1,
    display:'flex',
    justifyContent:'space-between'
  },
  button: {
    margin: theme.spacing(1)
  },
  delete: {
    color: '#DC0300 '
  },
  media:{
    backgroundColor:"#2eb82e",
    height: "20px"
},
  grid:{
    marginTop:"80px",
  },
  text: {
    marginRight: "50px", 
  },
  wrap:{
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width:'50px',
  },
  text2: {
    marginLeft: "15px"
  },
}))

export default function ConsultPortfolio(props) {
  const classes = useStyles()
  //var cards = [1, 2, 3, 4, 5]
  const myRol= sessionStorage.getItem('rol');
  const [projectPage, setProjectPage] = React.useState(1) 
  const [projectTotalCount, setProjectTotalCount] = React.useState(0) 
  const [projects,setProjects] = React.useState(undefined);
  const projectPageSize = 9
  let freelancerId = props.match.params.id

  const increaseProjectPage = () => {
      setProjectPage(page => page + 1);
  }

  const decreaseProjectPage = () => {
    if((projectPage - 1) >=1){
      setProjectPage(page => page - 1);
    }
  }

 

 React.useEffect(() => {
  
      axios({ method: 'post',
          validateStatus: function(status) {
            return status >= 200 && status < 500; 
          },
          url:`/project/portfolio/list`, 
          withCredentials:true,
          data: { page:projectPage , pageSize: projectPageSize, freelancerId: parseInt(freelancerId,10) }
        })
        .then(response =>{
            console.log('consult portf res',response)
            if(response.status === 200){
 
                setProjects(response.data.rows)
                setProjectTotalCount(response.data.count)
            } 
            
        })
        .catch(error => {
          console.log('error',error)
        })
  
  }, [projectPage]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header type={myRol}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Portafolio
          </Typography>
          {/* End hero unit */}
          {projects?(
               <>
                {projects.length<1?(
                  <Typography gutterBottom variant="subtitle1" component="h2">
                  El freelancer no posee ningún proyecto finalizado para mostrar
                  </Typography>
                ):null}
          <Grid container spacing={4} className={classes.grid}>
            {projects.map(card => (
              <Grid item key={card.id} xs={12} sm={6} md={12}>
                <Card className={classes.card}>
                    <CardMedia
                      className={classes.media}
                      />
                    <CardContent className={classes.cardContent}>
                    <Typography content="h2" variant="h6"> 
                      <strong className={classes.text}>{card.titulo.length <=30?(card.titulo):(card.titulo.slice(0, 30)+'...')} </strong>
                     
                    </Typography>
                    
                     <DomLink to={`/project/view/${card.id}`} style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
                      <Button variant="contained" className={classes.text2}>
                        Ver 
                      </Button>
                      </DomLink>
                   
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
           <ProjectPagination color={"primary"} currentPage={projectPage} pageSize={projectPageSize} totalCount={projectTotalCount} increasePage={increaseProjectPage} decreasePage={decreaseProjectPage}/>
              </> ):(<CircularProgress />)}
        </Container>
        <Copyright />
      </main>
    </div>
  );

}
