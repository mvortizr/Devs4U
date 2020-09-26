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
import Header from './Header'
import EliminarProyectoDialog from '../components/Dialog'
import { Link as DomLink } from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
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
  media0:{
    backgroundColor:"#FFC100",
    height: "50px"
  },
  media1:{
    backgroundColor:"#bf00ff",
    height: "50px"
  },
  media2:{
    backgroundColor:"#FF5100",
      height: "50px"
  },
  media3:{
    backgroundColor:"#2eb82e",
    height: "50px",
  },
  grid:{
      marginTop:"80px"
    }
}))

export default function GestProject(props) {
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
  const [projectToDelete, setProjectToDelete] = React.useState(undefined);

  //const etapaColor = {0:,1:,2:,3:}

  const [openDialog, setOpenDialog] = React.useState(false)
  
  const handleClickOpenDialog = selectedProjectId => {
    setProjectToDelete(selectedProjectId)
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const etapaNombre ={0:'Abierto',1:'Ejecución',2:'Revisión',3:'Finalizado'}

  const handleDeleteProject = () =>{
    console.log('projectToDelete', projectToDelete)
    if(projectToDelete!==undefined){
      axios.delete(`/project/cancel/${projectToDelete}`).then(
      (res) => {
        console.log('delete proj res',res)
        setOpenDialog(false)
        alert('El proyecto se ha cancelado con éxito')
        window.location.reload(); 
      },
      error => {
        console.log(error)
      }
    )
    }
  }


  React.useEffect(() => {
  
      axios({ method: 'post',
          validateStatus: function(status) {
            return status >= 200 && status < 500; 
          },
          url:`/project/list/view/created`, 
          withCredentials:true,
          data: { page:projectPage , pageSize: projectPageSize }
        })
        .then(response =>{
            console.log('gestion proj res',response)
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
          <Header type="contractor"/>      
          
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container className={classes.cardGrid} maxWidth="md">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Mi Proyectos {'      '}
                 <DomLink
                    to="/project/create"
                    style={{
                      textDecoration: 'none',
                      color: 'rgb(33,40,53)'
                  }}>
                                       
                 <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
                </DomLink>
              </Typography>
              {/* End hero unit */}

              {projects?(
               <>
               {projects.length<1?(
                  <Typography gutterBottom variant="subtitle1" component="h2">
                  Aún no posees proyectos para gestionar
                  </Typography>
                ):null}

              <Grid container spacing={4} className={classes.grid}>
                {projects.map(card => (

                  <Grid item key={card.id} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes[`media${card.etapa}`]}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {card.titulo}
                        </Typography>
                        <Typography>Etapa: {etapaNombre[card.etapa]}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          <DomLink
                            to={`/project/view/${card.id}`}
                            style={{
                              textDecoration: 'none',
                              color: 'rgb(33,40,53)'
                            }}>
                            <Link variant="body2">Consultar</Link>
                          </DomLink>
                        </Button>
                        <DomLink
                          to={`/project/edit/${card.id}`}
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
                         >
                          <Link variant="body2" className={classes.delete}  onClick={()=> handleClickOpenDialog(card.id)}>
                            Cancelar
                          </Link>
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))} 
                 
              </Grid>
              <ProjectPagination color={"primary"} currentPage={projectPage} pageSize={projectPageSize} totalCount={projectTotalCount} increasePage={increaseProjectPage} decreasePage={decreaseProjectPage}/>
              </> ):(<CircularProgress />)}
            </Container>
            <Copyright />
            <EliminarProyectoDialog
              content="¿Está seguro que desea cancelar el proyecto?"
              title="Eliminar proyecto"
              handleCloseDialog={handleCloseDialog}
              open={openDialog}
              handleDelete={handleDeleteProject}
            />
          </main>
        </div>
      )    

}
