import React from 'react'
import {
  Typography,
  Divider,
  Grid,
  CssBaseline,
  Container,
  Link,
  Button,
  Paper,
  TextField,
  IconButton
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from './Header'
import AddIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import { KeyboardDatePicker } from "@material-ui/pickers";








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
  textField:{
    marginRight:'20px'
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
    backgroundColor: theme.palette.background.paper,
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

  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },

  button1: {
    marginRight: '350px'
  },
  button2: {
    margin: theme.spacing(1)
  },
  grid:{
    marginTop:"50px"
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
  datePickers:{
    maxWidth:'150px',
    marginRight:'10px'
  }
}))

export default function CreateProject() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const [project,setProject]= React.useState({titulo:'',tipo:'',descripcion:'',presupuesto:'',entregables:'',objetivos:[],tecnologias:[],adicionales:[],etapasInfo:[]})

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const [selectedDateAbierto, setSelectedDateAbierto] = React.useState(new Date());
  const [selectedDateEjecucion, setSelectedDateEjecucion] = React.useState(new Date());
  const [selectedDateRevision, setSelectedDateRevision] = React.useState(new Date());

  
  
  const handleDateChangeAbierto = date => {
    setSelectedDateAbierto(date);
  };

  const handleDateChangeEjecucion = date => {
    setSelectedDateEjecucion(date);
  };

   const handleDateChangeRevision = date => {
    setSelectedDateRevision(date);
  };

  const handleChange = e => {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  const handleAddObjetives = () =>{
    let objetivos = [...project.objetivos]
    objetivos.push('')
    setProject({...project, objetivos: objetivos})

  }

  const handleRemoveObjetives = () =>{
    let objetivos = [...project.objetivos]
    objetivos.pop()
    setProject({...project, objetivos: objetivos})

  }

   const handleAddAdicionales = () =>{
    let adicionales = [...project.adicionales]
    adicionales.push('')
    setProject({...project, adicionales: adicionales})

  }

  const handleRemoveAdicionales = () =>{
    let adicionales = [...project.adicionales]
    adicionales.pop()
    setProject({...project, adicionales: adicionales})
  }

  const handleChangeArray = name => e => {
   
      if(name==="objetivo"){
        let objetivos = [...project.objetivos]
        objetivos[e.target.dataset.id] = e.target.value
        setProject({...project, objetivos: objetivos})
      }
      else if(name==="adicional"){
        let adicionales = [...project.adicionales]
        adicionales[e.target.dataset.id] = e.target.value
        setProject({...project, adicionales: adicionales})
      }
     

  }


  
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header type="contractor"/>
      <main className={classes.content}>
      {console.log('estado project', project)}
      {console.log('abierto', selectedDateAbierto)}
      {console.log('revision', selectedDateRevision)}
      {console.log('ejecucion', selectedDateEjecucion)}
        <div className={classes.appBarSpacer} />
         
        <Container className={classes.cardGrid} maxWidth="md">
        <Typography variant="h4" gutterBottom>
                Crear Nuevo  Proyecto
              </Typography>
          <Grid container spacing={5} className={classes.mainGrid} className={classes.grid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <div className={classes.addMarginBottom}>
                <div className={classes.labelAndCaption}>
                  <Typography variant="subtitle1" gutterBottom>
                      <strong>Nombre del Projecto </strong>

                  </Typography>
                  <Typography variant="caption" gutterBottom className={classes.caption}>
                  *Requerido. 180 caracteres máximo
                  </Typography>
                </div>
                <TextField
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  name="titulo"
                  placeholder="Título del Proyecto"
                  value= {project.titulo}
                  size="small"
                  inputProps={{ maxLength: 180 }}
                />
              </div>  
              

              <div className={classes.addMarginBottom}>
                <div className={classes.labelAndCaption}>
                  <Typography variant="subtitle1" gutterBottom>
                      <strong>Descripción del Projecto </strong>

                  </Typography>
                  <Typography variant="caption" gutterBottom className={classes.caption}>
                  *Requerido. 500 caracteres máximo
                  </Typography>
                </div>
                <TextField
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  name="descripcion"
                  placeholder="Descripción del Proyecto"
                  value= {project.descripcion}
                  size="small"
                  multiline
                  rows="4"
                  inputProps={{ maxLength: 500 }}
                />
              </div>  
              

              {/*Si queda tiempo, poner más bonito los objetivos */}

                 <Grid
                  container
                  direction="row"
                  alignItems="flex-end"
                  className={classes.addMarginBottom}
                >                                  
                  <Typography variant="h6" gutterBottom className={classes.wizardTitle}>
                  <br/>
                    <strong> Objetivos </strong>
                  </Typography>

                 <IconButton aria-label="add" color="primary" onClick={handleAddObjetives}>
                    <AddIcon />                  
                  </IconButton>  

                   <IconButton aria-label="add" color="primary" onClick={handleRemoveObjetives}>
                    <IndeterminateCheckBoxIcon/>                  
                  </IconButton>  

                </Grid>
              {project.objetivos !== null && project.objetivos !== undefined && project.objetivos.length>=1?(
              <ul>
              {project.objetivos.map( (obj, indexObj) => (
                <li> 
                  <TextField
                    variant="outlined"
                    fullWidth
                    onChange={handleChangeArray('objetivo')}
                    name="descripcion"
                    placeholder="Objetivo"
                    value= {project.objetivos[indexObj]}
                    size="small"
                    inputProps={{ maxLength: 500, 'data-id':indexObj}}
                  />
                </li>))}
                
              </ul>
              ):null}

              <Grid
                  container
                  direction="row"
                  alignItems="flex-end"
                  className={classes.addMarginBottom}
                >                                  
                  <Typography variant="h6" gutterBottom className={classes.wizardTitle}>
                  <br/>
                    <strong> Fecha de etapas de proyecto</strong>
                  </Typography>
              </Grid>

              <div className={classes.addMarginBottomLonger}>
                <KeyboardDatePicker
                  clearable
                  value={selectedDateAbierto}
                  label="Abierto"
                  placeholder="10/10/2018"
                  onChange={date => setSelectedDateAbierto(date)}
                  minDate={new Date()}
                  format="dd/MM/yyyy"
                  className={classes.datePickers}
                  InputLabelProps={{
                      shrink: true,
                    }}
                />

                <KeyboardDatePicker
                  clearable
                  value={selectedDateEjecucion}
                  label="Ejecución"
                  placeholder="10/10/2018"
                  onChange={date => setSelectedDateEjecucion(date)}
                  minDate={new Date()}
                  format="dd/MM/yyyy"
                  className={classes.datePickers}
                  InputLabelProps={{
                      shrink: true,
                    }}
                />

                <KeyboardDatePicker
                  clearable
                  value={selectedDateRevision}
                  label="Revisión"
                  placeholder="10/10/2018"
                  onChange={date => setSelectedDateRevision(date)}
                  minDate={new Date()}
                  format="dd/MM/yyyy"
                  className={classes.datePickers}
                  InputLabelProps={{
                      shrink: true,
                    }}
                />
                </div>

             

                <div className={classes.addMarginBottom}>
                <div className={classes.labelAndCaption}>
                  <Typography variant="subtitle1" gutterBottom>
                      <strong>Entregables </strong>

                  </Typography>
                  <Typography variant="caption" gutterBottom className={classes.caption}>
                  *Requerido. 500 caracteres máximo
                  </Typography>
                </div>
                <TextField
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  name="entregables"
                  placeholder="Descripción del Proyecto"
                  value= {project.entregables}
                  size="small"
                  multiline
                  rows="4"
                  inputProps={{ maxLength: 500 }}
                />
              </div>  

              {/*Si queda tiempo, poner más bonito los objetivos */}
                <Grid
                  container
                  direction="row"
                  alignItems="flex-end"
                  className={classes.addMarginBottom}
                >                                  
                  <Typography variant="h6" gutterBottom className={classes.wizardTitle}>
                  <br/>
                    <strong> Datos Adicionales </strong>
                  </Typography>

                 <IconButton aria-label="add" color="primary" onClick={handleAddAdicionales}>
                    <AddIcon />                  
                  </IconButton>  

                   <IconButton aria-label="add" color="primary" onClick={handleRemoveAdicionales}>
                    <IndeterminateCheckBoxIcon/>                  
                  </IconButton>  

                </Grid>
              {project.adicionales !== null && project.adicionales !== undefined && project.adicionales.length>=1?(
              <ul>
              {project.adicionales.map( (obj, indexObj) => (
                <li> 
                    <TextField
                      variant="outlined"
                      fullWidth
                      onChange={handleChangeArray('adicional')}
                      name="descripcion"
                      placeholder="Dato Adicional"
                      value= {project.adicionales[indexObj]}
                      size="small"
                      inputProps={{ maxLength: 500,'data-id':indexObj }}
                    />
                   </li>))}
                
              </ul>
              ):null}
               
             

              <Button
                variant="contained"
                id="botonCrear"
                color="primary"
                className={classes.button2}
                href="/project/manage/contractor">
                Crear
              </Button>
              <Button
                variant="contained"
                color="inherit"
                className={classes.button1}
                href="/project/manage/contractor">
                Cancelar
              </Button>
            </Grid>
            {/* End main content */}

            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>     

               <div className={classes.addMarginBottom}>
                 <Typography variant="subtitle1" gutterBottom>
                      <strong>Tipo de Proyecto </strong>

                  </Typography>
            
                <TextField
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  name="tipo"
                  placeholder="Ej:Desarrollo Web, Documentación"
                  value= {project.tipo}
                  inputProps={{ maxLength: 500 }}
                />
              </div>  

                <div className={classes.addMarginBottomLonger}>
                
                  <Typography variant="subtitle1" gutterBottom>
                      <strong>Tecnologías a Usar </strong>

                  </Typography>
                  <Typography variant="caption" gutterBottom className={classes.addMarginBottom}>
                  Separadas por comas
                  </Typography>
                
                <TextField
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  name="tecnologias"
                  placeholder="Ej: HTML,CSS, Java"
                  value= {project.tecnologias}
                  size="small"
                  multiline
                  rows="4"
                  inputProps={{ maxLength: 500 }}
                />
              </div>  
                <div className={classes.addMarginBottom}>
                <div className={classes.labelAndCaption}>
                  <Typography variant="subtitle1" gutterBottom>
                      <strong>Presupuesto </strong>

                  </Typography>
                  <Typography variant="caption" gutterBottom className={classes.caption}>
                  numérico
                  </Typography>
                </div>
                <TextField
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  name="presupuesto"
                  placeholder="Presupuesto en Bs"
                  value= {project.presupuesto}
                  size="small"         
                  inputProps={{ maxLength: 500 }}
                />
              </div>  
             
            </Paper>
            </Grid>
          </Grid>
        </Container>
        <Copyright />
      </main>
    </div>
  )
}
