import React from 'react';
import clsx from 'clsx';
import {Typography, Drawer, AppBar, Toolbar, List, Divider, IconButton, Badge, Grid, CssBaseline, Container, Paper, Link, Button, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './ListaItemsFree';
import { mainListItemsC, secondaryListItemsC } from './ListaItemsCont';
import axios from 'axios'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Instagram from '@material-ui/icons/Instagram';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import fotoPerfil from './images/fotoPerfil.png';
import UploadImage from '../components/UploadImage'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import InputAdornment from '@material-ui/core/InputAdornment';
import {LinkedIn as LinkedInIcon} from '@material-ui/icons';

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
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  formControl: {
    margin: theme.spacing(1),
    width: '250px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  buttonCan:{
    backgroundColor: "#FF0000",
    marginRight: "50px",
    color: "#ffff"
  },
  buttonSave:{
    backgroundColor: "#516FDE",
    color: "#ffff",
    marginRight: "50px",
  },
  addMarginBottom:{
    marginBottom:'15px'
  },
  addMarginBottomLonger:{
    marginBottom:'30px'
  },
  labelAndCaption:{
    display:'flex',
    alignItems:'center',
  },
  caption:{
    marginLeft:'10px',
  },
  centerImage:{
    marginLeft:'15%',
  },
  imageUser:{
    maxWidth:'280px',
    maxHeight:'250px'
  },
  wizardTitle:{
    marginRight:'7px',
  },
  distanceYearInput:{
    marginRight:'25px'
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const reviews = [1, 2];
  const [open, setOpen] = React.useState(true);
  const [value, setValue]=React.useState(4.8);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


  const [user, setUser] = React.useState({});
  const [newUserInfo, setNewUserInfo] = React.useState({});
  const [redirect, setRedirect]= React.useState(false);
  const [typeFreelancer, setTypeFreelancer] = React.useState('');
  const [typeSeniority, setTypeSeniority] = React.useState('');
  const inputLabel = React.useRef(null); 

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
          } 
          
      })
      .catch(error => {
        console.log('error',error)
      })
     
    }, []);

  const handleModification = () =>{
    /*axios.post('/edit', dummyDataFree)
            .then((response) => {
                 console.log('response perfil free modify', response);

                if(response.data.success){
                   //FRONTEND INFO redireccionar como lo hice en el login
                   setRedirect(true)
                   alert('Ha modificado su perfil con exito')
                 } else {
                  alert('Hubo un error en su modificacion')
                 }
            }, (error) => {
                console.log(error);
        });*/
  }

  const handleChangeTypeFreelancer = event => {
    setTypeFreelancer(event.target.value);
  };

   const handleChangeTypeSeniority = event => {
    setTypeSeniority(event.target.value);
  };

  function validaNumericos(event) {
    if(event.charCode >=1950 && event.charCode <= 2100){
      return true;
     }
     return false;        
  }

 
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
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
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Perfil
            </Typography>
            <Button type="button" variant="contained" className={classes.buttonCan}>
              Cancelar
            </Button>
            <Button type="button" variant="contained" className={classes.buttonSave} onClick={handleModification} >
              Guardar Cambios
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
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={5} className={classes.mainGrid}>
              {/* Main content */}
              <Grid item xs={12} md={4}>
                <img src={fotoPerfil} className={classes.imageUser}/>
                
                  {/*Cambiar por link para adjuntar imagen */}
                  <div className={classes.centerImage}>
                  <UploadImage/>
                  </div>
                  
               
              </Grid>
              <Grid item xs={12} md={8}>

              <div className={classes.addMarginBottom}>
                <div className={classes.labelAndCaption}>
                  <Typography variant="subtitle1" gutterBottom>
                      <strong>Nombre de Usuario </strong>

                  </Typography>
                  <Typography variant="caption" gutterBottom className={classes.caption}>
                  *Requerido. 180 caracteres máximo
                  </Typography>
                </div>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="nombre"
                  placeholder="Nombre del Usuario"
                  size="small"
                  inputProps={{ maxLength: 180 }}
                />
              </div>  
               <div className={classes.labelAndCaption}>
                <Typography variant="subtitle1" gutterBottom>
                  <strong>Descripción Corta</strong>
                </Typography>
                 <Typography variant="caption" gutterBottom className={classes.caption}>
                  250 caracteres máximo
                  </Typography>
                </div>
                <TextField
                  variant="outlined"
                  fullWidth
                  multiline
                  rows="4"
                  id="descripcion"
                  placeholder="Información Personal"
                  inputProps={{ maxLength: 250 }}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <Divider/>
              </Grid>
              <Grid item xs={12} md={7}>

              <div className={classes.addMarginBottom}>
              <div className={classes.labelAndCaption}>
                <Typography variant="subtitle1" gutterBottom>
                  <strong> Sobre mí </strong>
                </Typography>
                 <Typography variant="caption" gutterBottom className={classes.caption}>
                  600 caracteres máximo
                  </Typography>
                </div>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="sobreMi"
                  multiline
                  placeholder="Información Personal"
                  rows="5"
                  inputProps={{ maxLength: 500 }}
                />
                </div>
                
                <div className={classes.addMarginBottom}>
                  <div className={classes.labelAndCaption}>
                  <Typography variant="subtitle1" gutterBottom>
                    <strong> Habilidades </strong>
                  </Typography>
                   <Typography variant="caption" gutterBottom className={classes.caption}>
                    Separadas por comas. 600 caracteres máximo
                    </Typography>
                  </div>

                    <TextField
                      variant="outlined"
                      fullWidth
                      multiline
                      rows="2"
                      id="habilidades"
                      placeholder="Ej: Python,C,JavaScript..."
                      inputProps={{ maxLength: 300 }}
                    />
                </div>
                <Divider />

                <Grid
                  container
                  direction="row"
                  justify="start"
                  alignItems="flex-end"
                  className={classes.addMarginBottom}
                >                                  
                  <Typography variant="h6" gutterBottom className={classes.wizardTitle}>
                  <br/>
                    <strong> Experiencia</strong>
                  </Typography>

                 <IconButton aria-label="add" color="primary">
                    <AddIcon />                  
                  </IconButton>  

                </Grid>               

                 <Grid
                  container
                  direction="row"
                  justify="start"
                  alignItems="flex-end"
                  
                >         
                <Typography variant="subtitle1" gutterBottom>
                        <strong>Experiencia 1 </strong>
                </Typography>
                <IconButton aria-label="delete" color="primary">
                    <DeleteIcon  fontSize="small" />                  
                </IconButton>  
                </Grid>

                <div className={classes.addMarginBottom}>
                   <div className={classes.labelAndCaption}>
                    <Typography variant="subtitle2" gutterBottom>
                        <strong>Nombre de la Empresa </strong>

                    </Typography>
                    <Typography variant="caption" gutterBottom className={classes.caption}>
                    100 caracteres máximo
                    </Typography>
                  </div>
                  <TextField
                    variant="outlined"
                    fullWidth
                    size="small"
                    inputProps={{ maxLength: 100 }}  
                    placeholder="Nombre de la Empresa"               
                  />
                </div>


               <div className={classes.addMarginBottom}>
                   <div className={classes.labelAndCaption}>
                    <Typography variant="subtitle2" gutterBottom>
                        <strong>Cargo</strong>
                    </Typography>
                    <Typography variant="caption" gutterBottom className={classes.caption}>
                    100 caracteres máximo
                    </Typography>
                  </div>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  inputProps={{ maxLength: 100 }}
                  placeholder="Título del Cargo"
                />
              </div>

                <div className={classes.addMarginBottom}>
                   <div className={classes.labelAndCaption}>
                    <Typography variant="subtitle2" gutterBottom>
                        <strong>Tiempo transcurrido</strong>
                    </Typography>
                    <Typography variant="caption" gutterBottom className={classes.caption}>
                    Año de inicio y final. Use 0 para indicar "Actualidad".
                    </Typography>
                </div>
                
                  <TextField
                  id="outlined-number"          
                  variant="outlined"
                  size="small"
                  width="50%"
                  placeholder="Año de inicio"
                  inputProps={{ maxLength: 4 }}
                  className={classes.distanceYearInput}
                  />
                  <TextField
                  id="outlined-number"
                  variant="outlined"
                  size="small"
                  width="50%"
                  placeholder="Año de fin"
                  inputProps={{ maxLength: 4 }}
                  />
               
                <br/>
                </div>

                 <div className={classes.addMarginBottomLonger}>
                   <div className={classes.labelAndCaption}>
                    <Typography variant="subtitle2" gutterBottom>
                        <strong>Descripción</strong>
                    </Typography>
                    <Typography variant="caption" gutterBottom className={classes.caption}>
                    400 caracteres máximo
                    </Typography>
                </div>
                <TextField
                  variant="outlined"
                  fullWidth
                  multiline
                  rows="2"
                  inputProps={{ maxLength: 400 }}
                />
                </div>
                <Divider />






                 <Grid
                  container
                  direction="row"
                  justify="start"
                  alignItems="flex-end"
                  className={classes.addMarginBottom}
                >                                  
                  <Typography variant="h6" gutterBottom className={classes.wizardTitle}>
                  <br/>
                    <strong> Educación </strong>
                  </Typography>

                 <IconButton aria-label="add" color="primary">
                    <AddIcon />                  
                  </IconButton>  

                </Grid>  



                 <Grid
                  container
                  direction="row"
                  justify="start"
                  alignItems="flex-end"
                  
                >         
                <Typography variant="subtitle1" gutterBottom>
                        <strong>Educación 1 </strong>
                </Typography>
                <IconButton aria-label="delete" color="primary">
                    <DeleteIcon  fontSize="small" />                  
                </IconButton>  
                </Grid>
             

                <div className={classes.addMarginBottom}>
                   <div className={classes.labelAndCaption}>
                    <Typography variant="subtitle2" gutterBottom>
                        <strong>Nombre de la Institución </strong>

                    </Typography>
                    <Typography variant="caption" gutterBottom className={classes.caption}>
                    100 caracteres máximo
                    </Typography>
                </div>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  inputProps={{ maxLength: 100 }}
                  
                  placeholder="Nombre de la Institución"    
                />
                </div>

                <div className={classes.addMarginBottom}>
                   <div className={classes.labelAndCaption}>
                    <Typography variant="subtitle2" gutterBottom>
                        <strong>Título Obtenido </strong>

                    </Typography>
                    <Typography variant="caption" gutterBottom className={classes.caption}>
                    100 caracteres máximo
                    </Typography>
                </div>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  inputProps={{ maxLength: 100 }}
                  placeholder="Nombre de la Institución"    
                />
                </div>


               <div className={classes.addMarginBottom}>
                   <div className={classes.labelAndCaption}>
                    <Typography variant="subtitle2" gutterBottom>
                        <strong>Tiempo transcurrido</strong>
                    </Typography>
                    <Typography variant="caption" gutterBottom className={classes.caption}>
                    Año de inicio y final. Use 0 para indicar "Actualidad".
                    </Typography>
                </div>
                
                  <TextField
                  id="outlined-number"          
                  variant="outlined"
                  size="small"
                  width="50%"
                  placeholder="Año de inicio"
                  inputProps={{ maxLength: 4 }}
                  className={classes.distanceYearInput}
                  />
                  <TextField
                  id="outlined-number"
                  variant="outlined"
                  size="small"
                  width="50%"
                  placeholder="Año de fin"
                  inputProps={{ maxLength: 4 }}
                  />
               
                <br/>
                </div>
              </Grid>
              <Grid>
                <Divider orientation="vertical"/>
              </Grid>
              {/* End main content */}
              {/* Sidebar */}
              <Grid item xs={12} md={4}>
                
                  <Typography variant="h6" gutterBottom>
                    <strong> Información General </strong>
                  </Typography>


                 <div className={classes.addMarginBottom}>
                  <div className={classes.labelAndCaption}>
                    <Typography variant="subtitle1" gutterBottom>
                        <strong>País </strong>

                    </Typography>
                    <Typography variant="caption" gutterBottom className={classes.caption}>
                     80 caracteres máximo
                    </Typography>
                  </div>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="nombre"
                    placeholder="País"
                    size="small"
                    inputProps={{ maxLength: 80 }}
                  />
                </div>  

                <div className={classes.addMarginBottom}>
                  <div className={classes.labelAndCaption}>
                    <Typography variant="subtitle1" gutterBottom>
                        <strong>Ciudad </strong>

                    </Typography>
                    <Typography variant="caption" gutterBottom className={classes.caption}>
                     80 caracteres máximo
                    </Typography>
                  </div>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="nombre"
                    placeholder="Ciudad"
                    size="small"
                    inputProps={{ maxLength: 80 }}
                  />
                </div>  
                  
                 <div className={classes.addMarginBottom}>
                  <div className={classes.labelAndCaption}>
                    <Typography variant="subtitle1" gutterBottom>
                        <strong>Experiencia </strong>

                    </Typography>
                    <Typography variant="caption" gutterBottom className={classes.caption}>
                     numérico
                    </Typography>
                  </div>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="nombre"
                    placeholder="Experiencia"
                    size="small"
                    inputProps={{ maxLength: 80 }}
                    InputProps={{
                       endAdornment: <InputAdornment position="end">años</InputAdornment>,
                    }}
                  />
                </div>  

                <div className={classes.addMarginBottom}>
                  <FormControl className={classes.formControl}>
                    <InputLabel shrink id="label">
                      Tipo de freelancer
                    </InputLabel>
                    <Select
                      labelId="label"
                      id="typefreelancer"
                      value={typeFreelancer}
                      onChange={handleChangeTypeFreelancer}
                      displayEmpty
                      className={classes.selectEmpty}
                    >
                      <MenuItem value={1}>Desarrollador Web</MenuItem>
                      <MenuItem value={2}>Desarrollador Móvil</MenuItem>
                      <MenuItem value={3}>Q/A</MenuItem>
                      <MenuItem value={4}>Otros</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                 

                  
                <div className={classes.addMarginBottom}>
                  <div className={classes.labelAndCaption}>
                    <Typography variant="subtitle1" gutterBottom>
                        <strong>Idiomas </strong>

                    </Typography>
                    <Typography variant="caption" gutterBottom className={classes.caption}>
                     Separados por comas
                    </Typography>
                  </div>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="nombre"
                    multiline
                    rows="3"
                    placeholder="Idiomas"
                    size="small"
                    inputProps={{ maxLength: 180 }}
                  />
                </div>  

                <div className={classes.addMarginBottom}>
                  <FormControl className={classes.formControl}>
                    <InputLabel shrink id="label">
                      Seniority
                    </InputLabel>
                    <Select
                      labelId="label"
                      id="typefreelancer"
                      value={typeSeniority}
                      onChange={handleChangeTypeSeniority}
                      displayEmpty
                      className={classes.selectEmpty}
                    >
                      <MenuItem value={1}>Junior</MenuItem>
                      <MenuItem value={2}>Mid Level</MenuItem>
                      <MenuItem value={3}>Senior</MenuItem>
                      <MenuItem value={4}>Experto</MenuItem>
                    </Select>
                  </FormControl>
                  </div>

                  <div className={classes.labelAndCaption}>
                    <Typography variant="subtitle1" gutterBottom>
                        <strong>Links </strong>

                    </Typography>
                    <Typography variant="caption" gutterBottom className={classes.caption}>
                     Enlaces en su perfil
                    </Typography>
                  </div>
                  
                  <div className={classes.addMarginBottom}>
                    <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="Instagram"
                    inputProps={{ maxLength: 180 }}
                    size="small"
                    InputProps={{
                         startAdornment: <InputAdornment position="start"><Instagram/></InputAdornment>,
                      }}
                    />
                  </div>
                  
                  <div className={classes.addMarginBottom}>
                    <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="Facebook"
                    inputProps={{ maxLength: 180 }}
                    size="small"
                    InputProps={{
                         startAdornment: <InputAdornment position="start"><Facebook/></InputAdornment>,
                      }}
                    />
                  </div>
                  
                  <div className={classes.addMarginBottom}>
                    <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="Twitter"
                    inputProps={{ maxLength: 180 }}
                    size="small"
                    InputProps={{
                         startAdornment: <InputAdornment position="start"><Twitter/></InputAdornment>,
                      }}
                    />
                  </div>
                  <div className={classes.addMarginBottom}>
                    <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="LinkedIn"
                    inputProps={{ maxLength: 180 }}
                    size="small"
                    InputProps={{
                         startAdornment: <InputAdornment position="start"><LinkedInIcon/></InputAdornment>,
                      }}
                    />
                  </div>
                
              </Grid>
              {/* End sidebar */}
            </Grid>
          </Container>
          <Copyright />
        </main>
      </div>
    );
  
 
}