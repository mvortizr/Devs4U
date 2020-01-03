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
import DevPagination from '../components/Pagination';
import CircularProgress from '@material-ui/core/CircularProgress';
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
    height:280
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  media:{
    backgroundColor:"#F41204",
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
  const [devs,setDevs] = React.useState(undefined);
  const [devPage, setDevPage] = React.useState(1) 
  const [devTotalCount, setDevTotalCount] = React.useState(0) //TODO
  const devPageSize = 6
 

  const increaseDevPage = () => {
      setDevPage(page => page + 1);
  }

  const decreaseDevPage = () => {
    if((devPage - 1) >=1){
      setDevPage(page => page - 1);
    }
  }


  React.useEffect(() => {
  
      axios({ method: 'post',
          validateStatus: function(status) {
            return status >= 200 && status < 500; 
          },
          url:`/list/freelancers`, 
          withCredentials:true,
          data: { page:devPage , pageSize: devPageSize }
        })
        .then(response =>{
            console.log('dashboard free res',response)
            if(response.status === 200){
 
                setDevs(response.data.rows)
                setDevTotalCount(response.data.count)

            } 
            
        })
        .catch(error => {
          console.log('error',error)
        })
  
  }, [devPage]);



    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header type="contractor"/>
        {devs?(
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
            {devs.map(card => ( 
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                  <DomLink to={`/view/profile/${card.id}/freelancer`} style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia> 
                        <img src={card.foto} className={classes.img}/>
                      </CardMedia>
                      <div className={classes.details}>
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="h5" component="h2">
                            <strong>{card.nombre}</strong>
                          </Typography>
                          <Typography className={classes.wrap}>
                            {card.descripcionCorta}              
                          </Typography>
                          <Rating name="read-only" value={card.calificacionesMedia} readOnly />
                        </CardContent>
                      </div>
                    </CardActionArea>
                  </Card>
                   </DomLink>
                </Grid>
            ))}
          </Grid>
           <DevPagination color={"primary"} currentPage={devPage} pageSize={devPageSize} totalCount={devTotalCount} increasePage={increaseDevPage} decreasePage={decreaseDevPage}/>
          </Container>
          <Copyright />
        </main>
         ):(<CircularProgress />)}
      </div>
    );
  


}
