import React from 'react';
import clsx from 'clsx';
import {Typography, Grid, CssBaseline, Container, Paper, Link, Button, Divider, Step, Stepper, StepLabel, Chip} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as DomLink, Redirect } from 'react-router-dom';
import Header from './Header'
import Calendar from '@material-ui/icons/EventNote';

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

function getSteps() {
  return ['Abierto  17/12/2019', 'Ejecución  17/12/2019', 'Revisión  17/12/2019', 'Finalizado  17/12/2019'];
}

export default function ConsultProject(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  // const postID = props.match.params.id;
  // const[postInfo,setPostInfo]=React.useState(undefined);
  // const[postContractorName, setPostContractorName] = React.useState('');
  // const[postContractorId, setPostContractorId] = React.useState(undefined);

  // React.useEffect(() => {
    
  //     axios.post(`/project/id/${postID}`)
  //           .then((response) => {
  //               console.log('response perfil', response.data[0]);
  //               setPostInfo(response.data[0])
  //               setPostContractorId(response.data[0].contractor)
  //           }, (error) => {
  //               console.log(error);
  //       });
     
  //   }, []);
   
  //  React.useEffect(() => {
  //     axios.post(`/user/see/contractor/byId/${postContractorId}`)
  //           .then((response) => {
  //                console.log('contractor name', response.data[0]);
  //                setPostContractorName(response.data[0].firstName);
  //               // setPostInfo(response.data[0])
  //           }, (error) => {
  //               console.log(error);
  //     });
     
  //   }, [postContractorId,postContractorName]);

  if(props.type=="developerEj"){
    // if(postInfo){
      return (
        <div className={classes.root}>
          <CssBaseline />
          {/* {console.log('post info', postInfo)} */}
          <Header type="developer"/>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={5} className={classes.mainGrid}>
                {/* Main content */}
                <Grid item xs={12} md={7}>
                  <Typography variant="h3" gutterBottom>
                    Proyecto Web Devs4U
                  </Typography>
                  <br/>
                  <Typography variant="h6" gutterBottom>
                    <br/>
                    <strong>Descripción</strong>
                  </Typography>
                  <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. 
                    Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Typography>
                  <Divider/>
                  <Typography variant="h6" gutterBottom>
                    <br/>
                    <strong>Objetivos</strong>
                  </Typography>
                  <Typography paragraph>
                    <li>
                      <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                    </li>
                    <li>
                      <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                    </li>
                    <li>
                      <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                    </li>
                  </Typography>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    <br/>
                    <strong>Datos Adicionales</strong>
                  </Typography>
                  <Typography paragraph>
                    <li>
                      <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                    </li>
                    <li>
                      <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                    </li>
                  </Typography>
                </Grid>
                <Grid>
                  <Divider orientation="vertical"/>
                </Grid>
                {/* End main content */}
                {/* Sidebar */}
                <Grid item xs={12} md={4}>
                  <Button variant="contained" className={classes.buttonF}>
                    Coordinar
                  </Button>
                  <Button variant="contained" className={classes.buttonF}>
                    Entregar
                  </Button>
                  <Button variant="contained" className={classes.buttonRe}>
                    Renunciar
                  </Button>
                  <br/>
                  <br/>
                  <Divider/>
                  <Divider/>
                  <Typography paragraph>
                    <br/>
                    <strong>Contratista</strong>
                    <br/>
                    María Perez de Ovalles
                  </Typography>
                  <Typography paragraph>
                    <br/>
                    <strong>Desarrollador</strong>
                    <br/>
                    María V Ortiz
                  </Typography>
                  <Divider />
                  <Typography paragraph>
                    <br/>
                    <strong>Tipo de Proyecto</strong>
                    <br/>
                    Desarrollo Web
                  </Typography>
                  <Typography paragraph>
                    <br/>
                    <strong>Tecnologías Requeridas</strong>
                  </Typography>
                  <div className={classes.root2}>
                    <Chip label="HTML"/>
                    <Chip label="CSS"/>
                    <Chip label="Bootstrap"/>
                    <Chip label="JavaScript"/>
                    <Chip label="PHP"/>
                    <Chip label="C#"/>
                  </div>
                  <Typography paragraph>
                    <br/>
                    <strong>Presupuesto</strong>
                    <br/>
                    $1000 - $2000
                  </Typography>
                  <Divider />
                </Grid>
                {/* End sidebar */}
              </Grid>
            </Container>
            <Copyright />
          </main>
        </div>
      );
      // } else {
      //    return <CircularProgress />;
      // }
  }else{
    if(props.type=="developerSP"){
      // if(postInfo){
      return (
        <div className={classes.root}>
          <CssBaseline />
          {/* {console.log('post info', postInfo)} */}
          <Header type="developer"/>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={5} className={classes.mainGrid}>
                {/* Main content */}
                <Grid item xs={12} md={7}>
                  <Typography variant="h3" gutterBottom>
                    Proyecto Web Devs4U
                  </Typography>
                  <br/>
                  <Typography variant="h6" gutterBottom>
                    <br/>
                    <strong>Descripción</strong>
                  </Typography>
                  <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. 
                    Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Typography>
                  <Divider/>
                  <Typography variant="h6" gutterBottom>
                    <br/>
                    <strong>Objetivos</strong>
                  </Typography>
                  <Typography paragraph>
                    <li>
                      <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                    </li>
                    <li>
                      <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                    </li>
                    <li>
                      <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                    </li>
                  </Typography>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    <br/>
                    <strong>Datos Adicionales</strong>
                  </Typography>
                  <Typography paragraph>
                    <li>
                      <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                    </li>
                    <li>
                      <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                    </li>
                  </Typography>
                </Grid>
                <Grid>
                  <Divider orientation="vertical"/>
                </Grid>
                {/* End main content */}
                {/* Sidebar */}
                <Grid item xs={12} md={4}>
                  <Button variant="contained" className={classes.buttonF}>
                    Postularse
                  </Button>
                  <br/>
                  <br/>
                  <Divider/>
                  <Typography paragraph>
                    <br/>
                    <strong>Contratista</strong>
                    <br/>
                    María Perez de Ovalles
                  </Typography>
                  <Divider />
                  <Typography paragraph>
                    <br/>
                    <strong>Tipo de Proyecto</strong>
                    <br/>
                    Desarrollo Web
                  </Typography>
                  <Typography paragraph>
                    <br/>
                    <strong>Tecnologías Requeridas</strong>
                  </Typography>
                  <div className={classes.root2}>
                    <Chip label="HTML"/>
                    <Chip label="CSS"/>
                    <Chip label="Bootstrap"/>
                    <Chip label="JavaScript"/>
                    <Chip label="PHP"/>
                    <Chip label="C#"/>
                  </div>
                  <Typography paragraph>
                    <br/>
                    <strong>Presupuesto</strong>
                    <br/>
                    $1000 - $2000
                  </Typography>
                  <Divider />
                </Grid>
                {/* End sidebar */}
              </Grid>
            </Container>
            <Copyright />
          </main>
        </div>
      );
      // } else {
      //    return <CircularProgress />;
      // }
    }else{
      if(props.type=="developer"){
        // if(postInfo){
          return (
            <div className={classes.root}>
              <CssBaseline />
              {/* {console.log('post info', postInfo)} */}
              <Header type="developer"/>
              <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={5} className={classes.mainGrid}>
                    {/* Main content */}
                    <Grid item xs={12} md={7}>
                      <Typography variant="h3" gutterBottom>
                        Proyecto Web Devs4U
                      </Typography>
                      <br/>
                      <Typography variant="h6" gutterBottom>
                        <br/>
                        <strong>Descripción</strong>
                      </Typography>
                      <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. 
                        Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </Typography>
                      <Divider/>
                      <Typography variant="h6" gutterBottom>
                        <br/>
                        <strong>Objetivos</strong>
                      </Typography>
                      <Typography paragraph>
                        <li>
                          <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                        </li>
                        <li>
                          <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                        </li>
                        <li>
                          <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                        </li>
                      </Typography>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                      </Typography>
                      <Typography variant="h6" gutterBottom>
                        <br/>
                        <strong>Datos Adicionales</strong>
                      </Typography>
                      <Typography paragraph>
                        <li>
                          <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                        </li>
                        <li>
                          <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                        </li>
                      </Typography>
                    </Grid>
                    <Grid>
                      <Divider orientation="vertical"/>
                    </Grid>
                    {/* End main content */}
                    {/* Sidebar */}
                    <Grid item xs={12} md={4}>
                      <Typography paragraph>
                        <br/>
                        <strong>Contratista</strong>
                        <br/>
                        María Perez de Ovalles
                      </Typography>
                      <Typography paragraph>
                        <br/>
                        <strong>Desarrollador</strong>
                        <br/>
                        María V Ortiz
                      </Typography>
                      <Divider />
                      <Typography paragraph>
                        <br/>
                        <strong>Tipo de Proyecto</strong>
                        <br/>
                        Desarrollo Web
                      </Typography>
                      <Typography paragraph>
                        <br/>
                        <strong>Tecnologías Requeridas</strong>
                      </Typography>
                      <div className={classes.root2}>
                        <Chip label="HTML"/>
                        <Chip label="CSS"/>
                        <Chip label="Bootstrap"/>
                        <Chip label="JavaScript"/>
                        <Chip label="PHP"/>
                        <Chip label="C#"/>
                      </div>
                      <Typography paragraph>
                        <br/>
                        <strong>Presupuesto</strong>
                        <br/>
                        $1000 - $2000
                      </Typography>
                      <Divider />
                    </Grid>
                    {/* End sidebar */}
                  </Grid>
                </Container>
                <Copyright />
              </main>
            </div>
          );
          // } else {
          //    return <CircularProgress />;
          // }
      }else{
        if(props.type=="contractorSP"){
          // if(postInfo){
            return (
              <div className={classes.root}>
                <CssBaseline />
                {/* {console.log('post info', postInfo)} */}
                <Header type="contractor"/>
                <main className={classes.content}>
                  <div className={classes.appBarSpacer} />
                  <Container className={classes.cardGrid} maxWidth="md">
                  <Grid container spacing={5} className={classes.mainGrid}>
                      {/* Main content */}
                      <Grid item xs={12} md={7}>
                        <Typography variant="h3" gutterBottom>
                          Proyecto Web Devs4U
                        </Typography>
                        <br/>
                        <Typography variant="h6" gutterBottom>
                          <br/>
                          <strong>Descripción</strong>
                        </Typography>
                        <Typography paragraph>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. 
                          Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                          Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                        <Divider/>
                        <Typography variant="h6" gutterBottom>
                          <br/>
                          <strong>Objetivos</strong>
                        </Typography>
                        <Typography paragraph>
                          <li>
                            <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                          </li>
                          <li>
                            <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                          </li>
                          <li>
                            <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                          </li>
                        </Typography>
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                          <br/>
                          <strong>Datos Adicionales</strong>
                        </Typography>
                        <Typography paragraph>
                          <li>
                            <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                          </li>
                          <li>
                            <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                          </li>
                        </Typography>
                      </Grid>
                      <Grid>
                        <Divider orientation="vertical"/>
                      </Grid>
                      {/* End main content */}
                      {/* Sidebar */}
                      <Grid item xs={12} md={4}>
                        <Button variant="contained" color="primary" className={classes.buttonC}>
                          Modificar
                        </Button>
                        <Button variant="contained" className={classes.buttonRe}>
                          Cancelar
                        </Button>
                        <Button variant="contained" color="primary" className={classes.buttonC}>
                          Postulados
                        </Button>
                        <br/>
                        <br/>
                        <Divider/>
                        <Divider/>
                        <Typography paragraph>
                          <br/>
                          <strong>Contratista</strong>
                          <br/>
                          María Perez de Ovalles
                        </Typography>
                        <Typography paragraph>
                          <br/>
                          <strong>Desarrollador</strong>
                          <br/>
                          María V Ortiz
                        </Typography>
                        <Divider />
                        <Typography paragraph>
                          <br/>
                          <strong>Tipo de Proyecto</strong>
                          <br/>
                          Desarrollo Web
                        </Typography>
                        <Typography paragraph>
                          <br/>
                          <strong>Tecnologías Requeridas</strong>
                        </Typography>
                        <div className={classes.root2}>
                          <Chip label="HTML"/>
                          <Chip label="CSS"/>
                          <Chip label="Bootstrap"/>
                          <Chip label="JavaScript"/>
                          <Chip label="PHP"/>
                          <Chip label="C#"/>
                        </div>
                        <Typography paragraph>
                          <br/>
                          <strong>Presupuesto</strong>
                          <br/>
                          $1000 - $2000
                        </Typography>
                        <Divider />
                      </Grid>
                      {/* End sidebar */}
                    </Grid>
                  </Container>
                  <Copyright />
                </main>
              </div>
            );
            // } else {
            //    return <CircularProgress />;
            // }
        }else{
          if(props.type=="contractorEj"){
            // if(postInfo){
              return (
                <div className={classes.root}>
                  <CssBaseline />
                  {/* {console.log('post info', postInfo)} */}
                  <Header type="contractor"/>
                  <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={5} className={classes.mainGrid}>
                        {/* Main content */}
                        <Grid item xs={12} md={7}>
                          <Typography variant="h3" gutterBottom>
                            Proyecto Web Devs4U
                          </Typography>
                          <br/>
                          <Typography variant="h6" gutterBottom>
                            <br/>
                            <strong>Descripción</strong>
                          </Typography>
                          <Typography paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. 
                            Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </Typography>
                          <Divider/>
                          <Typography variant="h6" gutterBottom>
                            <br/>
                            <strong>Objetivos</strong>
                          </Typography>
                          <Typography paragraph>
                            <li>
                              <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                            </li>
                            <li>
                              <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                            </li>
                            <li>
                              <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                            </li>
                          </Typography>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                          </Typography>
                          <Typography variant="h6" gutterBottom>
                            <br/>
                            <strong>Datos Adicionales</strong>
                          </Typography>
                          <Typography paragraph>
                            <li>
                              <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                            </li>
                            <li>
                              <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                            </li>
                          </Typography>
                        </Grid>
                        <Grid>
                          <Divider orientation="vertical"/>
                        </Grid>
                        {/* End main content */}
                        {/* Sidebar */}
                        <Grid item xs={12} md={4}>
                          <Button variant="contained" color="primary" className={classes.buttonC}>
                            Modificar
                          </Button>
                          <Button variant="contained" className={classes.buttonRe}>
                            Cancelar
                          </Button>
                          <Button variant="contained" color="primary" className={classes.buttonC}>
                            Coordinar
                          </Button>
                          <br/>
                          <br/>
                          <Divider/>
                          <Divider/>
                          <Typography paragraph>
                            <br/>
                            <strong>Contratista</strong>
                            <br/>
                            María Perez de Ovalles
                          </Typography>
                          <Typography paragraph>
                            <br/>
                            <strong>Desarrollador</strong>
                            <br/>
                            María V Ortiz
                          </Typography>
                          <Divider />
                          <Typography paragraph>
                            <br/>
                            <strong>Tipo de Proyecto</strong>
                            <br/>
                            Desarrollo Web
                          </Typography>
                          <Typography paragraph>
                            <br/>
                            <strong>Tecnologías Requeridas</strong>
                          </Typography>
                          <div className={classes.root2}>
                            <Chip label="HTML"/>
                            <Chip label="CSS"/>
                            <Chip label="Bootstrap"/>
                            <Chip label="JavaScript"/>
                            <Chip label="PHP"/>
                            <Chip label="C#"/>
                          </div>
                          <Typography paragraph>
                            <br/>
                            <strong>Presupuesto</strong>
                            <br/>
                            $1000 - $2000
                          </Typography>
                          <Divider />
                        </Grid>
                        {/* End sidebar */}
                      </Grid>
                    </Container>
                    <Copyright />
                  </main>
                </div>
              );
              // } else {
              //    return <CircularProgress />;
              // }
          }else{
            // if(postInfo){
              return (
                <div className={classes.root}>
                  <CssBaseline />
                  {/* {console.log('post info', postInfo)} */}
                  <Header type="contractor"/>
                  <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={5} className={classes.mainGrid}>
                        {/* Main content */}
                        <Grid item xs={12} md={7}>
                          <Typography variant="h3" gutterBottom>
                            Proyecto Web Devs4U
                          </Typography>
                          <br/>
                          <Typography variant="h6" gutterBottom>
                            <br/>
                            <strong>Descripción</strong>
                          </Typography>
                          <Typography paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. 
                            Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </Typography>
                          <Divider/>
                          <Typography variant="h6" gutterBottom>
                            <br/>
                            <strong>Objetivos</strong>
                          </Typography>
                          <Typography paragraph>
                            <li>
                              <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                            </li>
                            <li>
                              <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                            </li>
                            <li>
                              <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                            </li>
                          </Typography>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                          </Typography>
                          <Typography variant="h6" gutterBottom>
                            <br/>
                            <strong>Datos Adicionales</strong>
                          </Typography>
                          <Typography paragraph>
                            <li>
                              <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                            </li>
                            <li>
                              <Typography variant="h6" component="span">Lorem ipsum dolor sit amet</Typography> 
                            </li>
                          </Typography>
                        </Grid>
                        <Grid>
                          <Divider orientation="vertical"/>
                        </Grid>
                        {/* End main content */}
                        {/* Sidebar */}
                        <Grid item xs={12} md={4}>
                          <Typography paragraph>
                            <br/>
                            <strong>Contratista</strong>
                            <br/>
                            María Perez de Ovalles
                          </Typography>
                          <Typography paragraph>
                            <br/>
                            <strong>Desarrollador</strong>
                            <br/>
                            María V Ortiz
                          </Typography>
                          <Divider />
                          <Typography paragraph>
                            <br/>
                            <strong>Tipo de Proyecto</strong>
                            <br/>
                            Desarrollo Web
                          </Typography>
                          <Typography paragraph>
                            <br/>
                            <strong>Tecnologías Requeridas</strong>
                          </Typography>
                          <div className={classes.root2}>
                            <Chip label="HTML"/>
                            <Chip label="CSS"/>
                            <Chip label="Bootstrap"/>
                            <Chip label="JavaScript"/>
                            <Chip label="PHP"/>
                            <Chip label="C#"/>
                          </div>
                          <Typography paragraph>
                            <br/>
                            <strong>Presupuesto</strong>
                            <br/>
                            $1000 - $2000
                          </Typography>
                          <Divider />
                        </Grid>
                        {/* End sidebar */}
                      </Grid>
                    </Container>
                    <Copyright />
                  </main>
                </div>
              );
              // } else {
              //    return <CircularProgress />;
              // }
          }
        }
      }
    }
  }
}
