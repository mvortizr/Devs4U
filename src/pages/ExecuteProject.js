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
import DevPagination from '../components/Pagination';
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';
import Radio from '@material-ui/core/Radio';




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
    marginLeft: "50px"
  },
  bottomButtons:{
     display: 'flex',
    justifyContent: 'center',
  }
}))

export default function ExecuteProject(props) {
  const classes = useStyles()
  const [checked, setChecked] = React.useState(true);
  const [selectedDev, setSelectedDev] = React.useState(0);
  const projectId = props.match.params.id
  const [devs,setDevs] = React.useState(undefined);
  const [devPage, setDevPage] = React.useState(1) 
  const [devTotalCount, setDevTotalCount] = React.useState(0) //TODO
  const devPageSize = 6
    
  const handleChange = event => {
    setSelectedDev(event.target.value);
  };

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
          url:`/project/postulation/list/`, 
          withCredentials:true,
          data: { page:devPage , pageSize: devPageSize, proyectoId: projectId}
        })
        .then(response =>{
            console.log('ejecutar proj res',response)
            if(response.status === 200){
 
                setDevs(response.data.rows)
                setDevTotalCount(response.data.count)

            } 
            
        })
        .catch(error => {
          console.log('error',error)
        })
  
    }, [devPage]);

const handleExecuteProject = () => {
  if(selectedDev !== 0){
     axios({ method: 'post',
          validateStatus: function(status) {
            return status >= 200 && status < 500; 
          },
          url:`/project/add/freelancer/incharge/${selectedDev}`, 
          withCredentials:true,
          data: {proyectoId: projectId}
        })
        .then(response =>{
            console.log('ejecutar proj res',response)
            if(response.status === 200){
                
               alert('Se ha cambiado la etapa de proyecto a ejecución')
               props.history.push(`/project/view/${projectId}`)

            } 
            
        })
        .catch(error => {
          console.log('error',error)
    })
  } else {
    alert('Debe seleccionar un freelancer')
  }
}

   
return (
    <div className={classes.root}>
        <CssBaseline />
        <Header type="contractor"/>
        <main className={classes.content}>
        {console.log('selectedDev',selectedDev)}
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
            { devs?(
            <Grid container spacing={4} className={classes.grid}>
            {devs.map(card => (
                <Grid item key={card.User.id} xs={12} sm={6} md={12}>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                    <Typography content="h2" variant="h6"> 
                        <Radio
                            checked={selectedDev == card.User.id}
                            onChange={handleChange}
                            value={card.User.id}
                            name="radio-button-demo"
                        />
                         {card.User.nombre}
                        <Rating value={card.User.calificacionesMedia} readOnly className={classes.text}/>
                       
                       
                    </Typography>
                    <div>
                     <DomLink to={`/view/portafolio/${card.User.id}`} style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
                        <Button variant="contained" className={classes.text}>
                            Ver Portafolio
                        </Button>
                        </DomLink>

                        <DomLink to={`/view/profile/${card.User.id}/${card.User.rol}`} style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
                        <Button variant="contained" className={classes.text}>
                            Ver Perfil
                        </Button>
                         </DomLink>
                    </div>
                    </CardContent>
                </Card>
                </Grid>
            ))}
            </Grid>): (<CircularProgress/>)}
            <DevPagination color={"primary"} currentPage={devPage} pageSize={devPageSize} totalCount={devTotalCount} increasePage={increaseDevPage} decreasePage={decreaseDevPage}/>
            
            <Divider/>

            <Grid item xs={12} md={12} className={classes.bottomButtons}>              
            <DomLink to={`/project/view/${projectId}`} style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
            <Button variant="contained" className={classes.but}>
                Cancelar
            </Button>
            </DomLink>
            <Button variant="contained" color="primary" className={classes.but} onClick={handleExecuteProject}>
                Comenzar ejecución
            </Button>
            </Grid>
        </Container>
        <Copyright />
        </main>
    </div>
    );
    
}
