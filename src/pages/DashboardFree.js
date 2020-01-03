import React from 'react'

import {
  Typography,
  CssBaseline,
  Container,
  Card,
  CardContent,
  CardMedia,
  Grid,
  CardActionArea,
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles'
import Header from './Header'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import fotoPerfil from './images/fotoPerfil.png'
import CircularProgress from '@material-ui/core/CircularProgress';
import ProjectPagination from '../components/Pagination';
import { Link as DomLink} from 'react-router-dom';


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
  },
  img: {
    width: 280,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  media:{
    backgroundColor:"#FFC100",
    height: "50px"
  },
  wrap:{
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width:'200px',
  }
}))

export default function Dashboard(props) {
  const classes = useStyles()


  const [projectPage, setProjectPage] = React.useState(1) 
  const [projectTotalCount, setProjectTotalCount] = React.useState(0) //TODO
  const projectPageSize = 9
  //const [cards,setCards] = React.useState([])

  const increaseProjectPage = () => {
      setProjectPage(page => page + 1);
  }

  const decreaseProjectPage = () => {
    if((projectPage - 1) >=1){
      setProjectPage(page => page - 1);
    }
  }

  //const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


  //const [d,setDevs] = React.useState(undefined);
  const [projects,setProjects] = React.useState(undefined);

  //const etapaColor = {0:,1:,2:,3:}


  React.useEffect(() => {
  
      axios({ method: 'post',
          validateStatus: function(status) {
            return status >= 200 && status < 500; 
          },
          url:`/project/list/view`, 
          withCredentials:true,
          data: { page:projectPage , pageSize: projectPageSize }
        })
        .then(response =>{
            console.log('dashboard free res',response)
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
            <Header type="developer"/>
            {projects?(
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                  {projects.map(card => (
                    <Grid item key={card.id} xs={12} sm={6} md={4}>
                    <DomLink to={`/project/view/${card.id}`} style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
                      <Card className={classes.card}>
                        <CardActionArea>
                          <CardMedia
                          className={classes.media}
                          />
                          <div className={classes.details}>
                            <CardContent className={classes.cardContent}>
                              <Typography gutterBottom variant="h5" component="h2">
                                <strong>{card.titulo}</strong>
                              </Typography>
                              <Typography className={classes.wrap}>
                                {card.descripcion}                   
                              </Typography>
                            </CardContent>
                          </div>
                        </CardActionArea>
                      </Card>
                    </DomLink>
                    </Grid>
                  ))}
                </Grid>
                 <ProjectPagination color={"primary"} currentPage={projectPage} pageSize={projectPageSize} totalCount={projectTotalCount} increasePage={increaseProjectPage} decreasePage={decreaseProjectPage}/>
              </Container>
              <Copyright />
            </main>
            ):(<CircularProgress />)}
          </div>
        );
         
    
}
