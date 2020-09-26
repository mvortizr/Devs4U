import React from 'react';
import clsx from 'clsx';
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
  Paper,
  Link,
  Button,
  Box,
  Chip,
  Card,
  CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItemsC, secondaryListItemsC } from './ListaItemsCont';
import { mainListItems, secondaryListItems } from './ListaItemsFree';
import { Link as DomLink} from 'react-router-dom';
import EliminarPerfilDialog from '../components/Dialog';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReviewPagination from '../components/Pagination';
import Rating from '@material-ui/lab/Rating';
import {Facebook as FacebookIcon, LinkedIn as LinkedInIcon, Instagram as InstagramIcon, Twitter as TwitterIcon} from '@material-ui/icons';
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'


import Header from './Header'
import {SERVER_ROUTE} from '../config'
// import CreateIcon from '@material-ui/icons/CreateIcon'
// import ClearIcon from '@material-ui/icons/ClearIcon'

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
    display: 'flex',
  },
  root2:{
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
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
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  appBarFree: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor:'#299DE8'
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
    overflow: 'auto',
    backgroundColor: '#FFFF'
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
    maxWidth: 400,
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
  button: {
    margin: theme.spacing(1)
  },
  buttonMod: {
    color:"#ffff",
    backgroundColor: "#0083FF",
    margin: theme.spacing(1)
  },
  RedesIcons:{
    display:'flex',
    justifyContent:'flex-end',
    width:'100%',
    marginBottom:'0px',
  },
  dividerTop:{
    margin:'0px 20px 20px 0px',
  },
  buttonDel: {
    color:"#ffff",
    backgroundColor: "#FF0000",
    margin: theme.spacing(1),
    marginRight: "50px"
  },
  rateBoxAlign:{
    padding:'0px',
  },
  rateBox:{
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
  imageUser:{
    maxWidth:'280px',
    maxHeight:'250px'
  },
}))

export default function ConsultProfile(props) {
  const classes = useStyles()
  const [reviews,setReviews] = React.useState([]) //TODO
  const [reviewPage, setReviewPage] = React.useState(1) 
  const [reviewTotalCount, setReviewTotalCount] = React.useState(0) //TODO
  const reviewPageSize = 3
  const [open, setOpen] = React.useState(false)
  
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const increaseReviewPage = () => {
      setReviewPage(page => page + 1);
  }

  const decreaseReviewPage = () => {
    if((reviewPage - 1) >=1){
      setReviewPage(page => page - 1);
    }
  }

  //Dialog Eliminar
  const [openDialog, setOpenDialog] = React.useState(false)
 

  const handleClickOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const [user, setUser] = React.useState(undefined);

  React.useEffect(() => {
      axios({ method: 'get',
        validateStatus: function(status) {
          return status >= 200 && status < 500; 
        },
        url:`/profile`, 
        withCredentials:true
      })
      .then(response =>{
          console.log('consultar res',response)
          if(response.status === 200){
            setUser(response.data[0]) 
            setReviewPage(1)
          } 
          
      })
      .catch(error => {
        console.log('error',error)
      })
     
    }, []);

    React.useEffect(() => {
  
      axios({ method: 'post',
          validateStatus: function(status) {
            return status >= 200 && status < 500; 
          },
          url:`/review/mine/list`, 
          withCredentials:true,
          data: { page:reviewPage , pageSize: reviewPageSize }
        })
        .then(response =>{
            console.log('consultar res reviews',response)
            if(response.status === 200){
 
            setReviews(response.data.rows)
            setReviewTotalCount(response.data.count)

            } 
            
        })
        .catch(error => {
          console.log('error',error)
        })
  
  }, [reviewPage]);

  const handleLogOut = () => {
    console.log('logging out frontend')
    axios.post('/logout').then(
      () => {
        sessionStorage.clear();
        props.history.push('/')
      },
      error => {
        console.log(error)
      }
    )
  }

  const handleDeleteProfile = () => {
    axios.delete('/profile/delete').then(
      () => {
        sessionStorage.clear();
        props.history.push('/')
      },
      error => {
        console.log(error)
      }
    )
     
  }
    

  

  if(user){
        return (
          <div className={classes.root}>
            <CssBaseline />   
            <AppBar position="absolute" className={clsx(classes.appBarFree, open && classes.appBarShift)}>
              <Toolbar className={classes.toolbar}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h4" color="inherit" noWrap className={classes.title}>
                  Perfil
                </Typography>
                <DomLink to="/profile/modify" style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
                <Button variant="contained" className={classes.buttonMod} >
                  Modificar 
                </Button>
                </DomLink>
                <Button variant="contained" className={classes.buttonDel} onClick={handleClickOpenDialog}>
                  Eliminar 
                </Button>
                <IconButton color="inherit">
                  {/*badgeContent muestra la cantidad de notificaciones*/}
                  <Badge badgeContent={0} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
              }}
              open={open}
            >
              <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              {user.rol=='freelancer'?(
                <>
              <List>{mainListItems}</List>
              <Divider />
              <List>{secondaryListItems}</List>
              </>
              ):(
                <>
                <List>{mainListItemsC}</List>
                <Divider />
                <List>{secondaryListItemsC}</List>
                </>
              )}
              <List>
                <ListItem button onClick={handleLogOut}>
                    <ListItemIcon>
                    <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cerrar Sesión" />
                </ListItem>
                </List>          
            </Drawer>


            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Container className={classes.cardGrid} maxWidth="md">
              <Grid container spacing={5} className={classes.mainGrid}>
                  {/* Main content */}
                  <Grid item xs={12} md={4}>
                    <img src={user.foto} className={classes.imageUser}/>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Typography variant="h4" gutterBottom>
                      <strong>{user.nombre} </strong>
                      
                    </Typography>
                    <div className={classes.rateBox}>
                    
                    <Box component="fieldset" mb={3} borderColor="transparent" className={classes.rateBoxAlign}> 
                    
                    <Rating name="half-rating" value={user.calificacionesMedia} readOnly  precision={0.2} size="large" /> 
                    </Box>
                    <Box mb={3}> {user.calificacionesMedia}</Box>
                    </div>
                    <Typography paragraph> 
                      {user.descripcionCorta}
                    </Typography>

                    <Box component="fieldset" mb={3} borderColor="transparent" className={classes.RedesIcons} >
                      {user.facebook !== ''? (
                      <DomLink to={`/http://${user.facebook}`} style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
                        <IconButton  aria-label="facebook" component="span">
                          <FacebookIcon />
                        </IconButton>
                      </DomLink>
                      ):null}
                      {user.twitter !== ''? (
                      <DomLink to={`/http://${user.twitter}`} style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
                      <IconButton   aria-label="twitter" component="span">
                        <TwitterIcon />
                      </IconButton>
                      </DomLink>
                       ):null}
                      {user.instagram !== ''? (
                      <DomLink to={`/http://${user.instagram}`} style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
                      <IconButton   aria-label="instagram" component="span">
                        <InstagramIcon />
                      </IconButton>
                      </DomLink>
                       ):null}
                       {user.linkedin !== ''? (
                      <DomLink to={`/http://${user.linkedin}`} style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
                      <IconButton    aria-label="linkedinr" component="span">
                        <LinkedInIcon />
                      </IconButton>
                      </DomLink>
                      ):null}

                      {user.web !== ''? (
                      <Button  href={`/http://${user.web}`} variant="contained" color="primary" className={classes.button} >
                        Visitar Web
                      </Button>
                       ):null}
                    </Box>
                  </Grid>
                 
                  
                  
                  <Grid item xs={12} md={12}>
                    <Divider className={classes.dividerTop}/>
                  </Grid>
                  
                  <Grid item xs={12} md={7}>
                  {user.sobreMi !== ''? (
                    <>
                    <Typography variant="h6" gutterBottom>
                      <strong>Sobre mí</strong>
                    </Typography>
                    <Typography paragraph>
                      {user.sobreMi}
                    </Typography>            

                    <Divider />
                    </>
                    ):null}
                    

                  { user.rol==='freelancer'?(
                    <>
                      {user.freelancer.habilidades !== null && (user.freelancer.habilidades.length >=1)? (
                      <>
                      <Typography variant="h6" gutterBottom>
                        <br/>
                        <strong>Habilidades</strong>
                      </Typography>
                      <div className={classes.root2}>
                        { user.freelancer.habilidades.map(habilidad => 
                          <Chip label={habilidad} />
                        )}
                      </div>
                      <br/>
                    
                      <Divider />
                    </>
                      ):null}
                    {(user.educacion.length >=1 || user.experiencia.length>=1)? (
                      <>
                    <Typography variant="h6" gutterBottom>
                      <br/>
                      <strong>Experiencia</strong>
                    </Typography>
                    { user.experiencia.map( exp =>
                    <Typography paragraph>
                      <strong>{exp.nombreEmpresa}</strong><br/>
                      {`${exp.cargo}  ${exp.anoInicio}-${exp.anoFin!==0?exp.anoFin:"Actualidad"}`}<br/>
                      {exp.descripcion}
                    </Typography>
                    )}
                    <Divider />
                    </>
                    ):null}
                    { (user.educacion.length >=1)? (
                      <>
                    <Typography variant="h6" gutterBottom>
                      <br/>
                      <strong>Educación</strong>
                    </Typography>
                    { user.educacion.map( edu =>
                    <Typography paragraph>
                      <strong>{edu.institucion}</strong><br/> 
                      {`${edu.tituloObtenido} ${edu.anoInicio}-${edu.anoFin!==0?edu.anoFin:"Actualidad"}`} 
                    </Typography>
                    )}
                    </>
                    ):null}
                    </>):null}
                  </Grid>
                   
                  <Grid>
                    <Divider orientation="vertical"/>
                  </Grid>
                 
                  {/* End main content */}
                  {/* Sidebar */}
                  <Grid item xs={12} md={4}>
                  { (user.ciudad && user.pais) !==''? (
                    <>
                    <Typography paragraph>
                      <strong>Residencia</strong>
                    </Typography>
                    <Typography paragraph>
                      {user.ciudad}, {user.pais}      
                    </Typography>
                    <Divider />
                    </>
                  ):null}
                    {user.rol==='freelancer' && user.freelancer.tiempoExperiencia!=='' && user.freelancer.tiempoExperiencia!==null? (
                      <>
                    <Typography paragraph>
                      <br/>
                      <strong>Experiencia</strong> 
                    </Typography>
                    <Typography paragraph>
                      {user.freelancer.tiempoExperiencia} años
                    </Typography>

                    <Divider />
                    </>
                    ):null}
                    {user.rol==='freelancer' && user.freelancer.tipoFreelancer!=='' && user.freelancer.tipoFreelancer!==null? (
                      <>
                    <Typography paragraph>
                      <br/>
                      <strong>Tipo de Freelancer</strong> 
                    </Typography>
                    <Typography paragraph>
                      {user.freelancer.tipoFreelancer}
                      
                    </Typography>
                    <Divider />
                      </>
                    ):null}
                    {user.idiomas !==null? (
                      <>
                    <Typography paragraph>
                      <br/>
                      <strong>Idiomas</strong> 
                    </Typography>
                    <Typography paragraph>
                     {user.idiomas.join()}
                      
                    </Typography>
                    <Divider />
                    </>
                    ):null}
                    {user.rol==='freelancer' && user.freelancer.seniority!=='' && user.freelancer.seniority!==null? (
                      <>
                    <Typography paragraph>
                      <br/>
                      <strong>Seniority</strong> 
                    </Typography>
                    <Typography paragraph>
                     {user.freelancer.seniority}
                    </Typography>
                    <Divider />
                      </>):null}
                  </Grid>
                  {/* End sidebar */}
                </Grid>
                <br/>
                <br/>
                <Grid item xs={12} md={12}>
                  <Divider/>
                </Grid>
                {reviews.length>=1?(
                <>
                <Grid item xs={12} md={12}>
                  <Typography variant="h6" gutterBottom>
                    <br/>
                    <strong>Reviews</strong>
                  </Typography> 
                  <Container className={classes.cardGrid} maxWidth="md">
                  <Grid container spacing={4}>
                    {reviews.map(review => (
                      <Grid item key={review.id} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                          <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                              <strong>{review.creador.nombre}</strong>
                            </Typography>
                    <Rating name="half-rating" value={review.calificacion} readOnly  precision={0.2}/>
                            <br />
                            
                            <Typography>
                              {review.descripcion}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>                   
                    ))}
                  </Grid>
  
                  <ReviewPagination color={"primary"} currentPage={reviewPage} pageSize={reviewPageSize} totalCount={reviewTotalCount} increasePage={increaseReviewPage} decreasePage={decreaseReviewPage}/>
                </Container>          
                </Grid>
                </>):null}
                <EliminarPerfilDialog content="¿Está seguro que desea eliminar su perfil?" title="Eliminar Perfil" handleCloseDialog={handleCloseDialog} handleDelete={handleDeleteProfile} open={openDialog}/>
              </Container>
              <Copyright />
            </main>
          </div>
        )
      
      
    } else{
      return <CircularProgress/>
    }
  
}

