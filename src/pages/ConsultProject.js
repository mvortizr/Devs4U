import React from 'react';
import clsx from 'clsx';
import {Typography, Grid, CssBaseline, Container, Paper, Link, Button, Divider, Step, Stepper, StepLabel, Chip,CircularProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as DomLink, Redirect } from 'react-router-dom';
import Header from './Header'
import Calendar from '@material-ui/icons/EventNote';
import axios from 'axios'
import moment from 'moment'

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
  root2:{
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
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
    backgroundColor: '#FFFF'
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
  buttonF: {
    margin: theme.spacing(1),
    backgroundColor:'#0C95D1',
    color: '#FFFF'
  },
  buttonRe: {
    margin: theme.spacing(1),
    backgroundColor:'#FF0000',
    color: '#FFFF'
  },
  buttonC: {
    margin: theme.spacing(1),
  },
  grid:{
    marginTop:"50px"
  },

}));



export default function ConsultProject(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [activeStep, setActiveStep] = React.useState(4);
  const [steps,setSteps] = React.useState(['Abierto  17/12/2019', 'Ejecución  17/12/2019', 'Revisión  17/12/2019', 'Finalizado  17/12/2019'])
  //const steps = getSteps();
  const projectId = props.match.params.id
  const [project, setProject] =React.useState('');
  const myRol= sessionStorage.getItem('rol');
  const myId= sessionStorage.getItem('userId');

  const handleDisablePostulation =() => {
    return 'hola'
  }
  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

   React.useEffect(() => {
      axios({ method: 'get',
        validateStatus: function(status) {
          return status >= 200 && status < 500; 
        },
        url:`/project/view/${projectId}`, 
        withCredentials:true
      })
      .then(response =>{

        //moment('2019-11-03T05:00:00.000Z').utc().format('MM/DD/YYYY')
          console.log('consultar res',response)
          if(response.status === 200){
            setProject(response.data[0]) 
            setActiveStep(response.data[0].etapa)
            let etapasInfo= response.data[0].etapasInfo
            setSteps([`Abierto  ${moment(etapasInfo[0].deadline).format('DD/MM/YYYY')}`, `Ejecución  ${moment(etapasInfo[1].deadline).format('DD/MM/YYYY')}`, `Revisión  ${moment(etapasInfo[2].deadline).format('DD/MM/YYYY')}`, `Finalizado `])
            
          } 
          
      })
      .catch(error => {
        console.log('error',error)
      })
     
    }, []);

  //const getSteps =() => {
  //return ['Abierto  17/12/2019', 'Ejecución  17/12/2019', 'Revisión  17/12/2019', 'Finalizado  17/12/2019'];
 // }

 return (
              <div className={classes.root}>
                <CssBaseline />
                {/* {console.log('post info', postInfo)} */}
                <Header type={myRol}/>
                {console.log('myRol', myRol)}
                { project!== '' && project!== undefined? (
                <main className={classes.content}>
                  <div className={classes.appBarSpacer} />
                  <Container className={classes.cardGrid} maxWidth="md">
                  <Grid container spacing={5} className={classes.mainGrid}>
                      {/* Main content */}
                      
                      <Grid item xs={12} md={7}>
                        <Typography variant="h3" gutterBottom>
                          {project.titulo}
                        </Typography>
                        <br/>
                        <Typography variant="h6" gutterBottom>
                          <br/>
                          <strong>Descripción</strong>
                        </Typography>
                        <Typography paragraph>
                          {project.descripcion}
                        </Typography>
                        <Divider/>
                        {project.objetivos!== undefined && project.objetivos.length>=1?(
                          <>
                            <Typography variant="h6" gutterBottom>
                              <br/>
                              <strong>Objetivos</strong>
                            </Typography>
                            <Typography paragraph>
                            {project.objetivos.map(obj => (
                               <li>
                                <Typography variant="subtitle1" component="span">{obj}</Typography> 
                              </li>
                              ))}
                             
                            </Typography>
                          </>
                        ):null}
                        <Typography variant="h6" gutterBottom>
                          <br/>
                          <strong>Etapas de Proyecto</strong>
                        </Typography>
                        <div>
                          <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map(label => (
                              <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                              </Step>
                            ))}
                          </Stepper>
                        </div> 
                        <Typography variant="h6" gutterBottom>
                          <br/>
                          <strong>Entregables</strong>
                        </Typography>
                        <Typography paragraph>
                         {project.entregables}
                        </Typography>
                        {project.adicionales !== undefined && project.adicionales.length>=1?(
                          <>
                            <Typography variant="h6" gutterBottom>
                              <br/>
                              <strong>Datos Adicionales</strong>
                            </Typography>
                            <Typography paragraph>
                            {project.adicionales.map( adicional => (
                              <li>
                                <Typography variant="subtitle1" component="span">{adicional}</Typography> 
                              </li>
                              ))}
                            </Typography>
                          </>):null}
                      </Grid>
                      <Grid>
                        <Divider orientation="vertical"/>
                      </Grid>
                      {/* End main content */}
                      {/* Sidebar */}
                      <Grid item xs={12} md={4}>

                      
                      {(project.creador !== null) && (project.creador.id == myId) && (myRol==='contractor')?(
                        <>
                        <Button variant="contained" color="primary" className={classes.buttonC}>
                          Modificar
                        </Button>
                        <Button variant="contained" className={classes.buttonRe}>
                          Cancelar
                        </Button>


                        { project.etapa === 0?(
                        <Button variant="contained" color="primary" className={classes.buttonC}>
                          Ejecutar
                        </Button>):null}

                        { project.etapa === 2?(
                        <Button variant="contained" color="primary" className={classes.buttonC}>
                          Revisar
                        </Button>):null}

                        </>
                        ):null}

                        {project.etapa === 0 && myRol==='freelancer'?(
                        <Button variant="contained" color="primary" className={classes.buttonC}>
                          Postularse
                        </Button>):null}
                        

                        { project.etapa === 1 && myRol==='freelancer' && project.encargado!== null && project.encargado.id===myId? (
                        <Button variant="contained" color="primary" className={classes.buttonC} disable={handleDisablePostulation}>
                         Entregar 
                        </Button>
                        ):null}


                      {/*Agregar condicion de los booleanos de proyecto*/}
                        { project.etapa === 3?(
                        <Button variant="contained" color="primary" className={classes.buttonC}>
                          Calificar
                        </Button>):null}

                        <br/>
                        <br/>
                        <Divider/>
                      

                        {project.creador !== null? (
                        <Typography paragraph>
                          <br/>
                          <strong>Contratista</strong>
                          <br/>
                          {project.creador.nombre}
                        </Typography>
                        ):null}
                        {project.encargado !== null? (
                        <Typography paragraph>
                          <br/>
                          <strong>Desarrollador</strong>
                          <br/>
                          {project.encargado.nombre}
                        </Typography>):null}
                        <Divider />
                        <Typography paragraph>
                          <br/>
                          <strong>Tipo de Proyecto</strong>
                          <br/>
                          {project.tipo}
                        </Typography>
                        {project.tecnologias !== undefined && project.tecnologias.length >=1? (
                          <>
                          <Typography paragraph>
                            <br/>
                            <strong>Tecnologías Requeridas</strong>
                          </Typography>

                          <div className={classes.root2}>
                          {project.tecnologias.map( tech => (
                            <Chip label={tech}/>
                            ))}
                          </div>
                        </>
                        ):null}
                        <Typography paragraph>
                          <br/>
                          <strong>Presupuesto</strong>
                          <br/>
                          {`${project.presupuesto} Bs`}
                        </Typography>
                        <Divider />
                      </Grid>
                      {/* End sidebar */}
                    </Grid>
                  </Container>
                  <Copyright />
                </main>
                ):<CircularProgress/>}
              </div>
            );







 }