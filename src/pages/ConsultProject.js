import React from 'react';
import clsx from 'clsx';
import {Typography, Grid, CssBaseline, Container, Paper, Link, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

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
  buttonF: {
    margin: theme.spacing(1),
    backgroundColor:'#0C95D1'
  },
  buttonC: {
    margin: theme.spacing(1),
  },
  grid:{
    marginTop:"50px"
  }
}));

const steps = ['Negociación', '1era Iteración', '2da Iteración', '3era Iteración', 'Finalizado'];

export default function ConsultProject(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
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
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              Título del Proyecto
            </Typography>
            <div className={classes.grid}>
              <Stepper className={classes.stepper}>
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
            <Grid container spacing={5} className={classes.mainGrid}>
              {/* Main content */}
              <Grid item xs={12} md={8} className={classes.grid}>
                <Typography variant="h4" gutterBottom>
                  {/* {postInfo.name} */}
                </Typography>
                <Typography variant="h4" gutterBottom>
                  Descripción del Proyecto:
                </Typography>
  
                <Typography paragraph>
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXX
                     {/* {postInfo.description} */}
                </Typography>
  
               
               {/* <Typography variant="h6" gutterBottom>
  
                <CalendarTodayIcon />
                Fecha Tope del proyecto: 30/10/2019
                </Typography>  */}   
  
                <Typography variant="h4" gutterBottom>
                  Tecnologías Requeridas:
                </Typography>
  
                <Typography paragraph>
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXX
                </Typography>
                {/* <Technologies arr={postInfo.tecnologies}/>  */}
                  
                {/*
                <Typography variant="h6" gutterBottom>
                  Desarrollador Encargado: 
                </Typography>
              */}
  
                <Typography variant="h4" gutterBottom>
                  Datos Adicionales:
                </Typography>
  
                <Typography paragraph>
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  {/* <li className={classes.listItem}>
                      <Typography component="span"/> {postInfo.additionals} 
                  </li> */}
                </Typography>
              </Grid>
              {/* End main content */}
              {/* Sidebar */}
              <Grid item xs={12} md={4}>
                <Paper elevation={0} className={classes.sidebarAboutBox}>
                  <Typography variant="h6" gutterBottom>
                    Información General
                  </Typography>
                  <Typography paragraph>
                      <strong>Contratista:</strong>
                      {/* {postContractorName} */}
                  </Typography>
                  <Typography paragraph>
                      <strong>Entregables:</strong> 
                      {/* {postInfo.entregables} */}
                  </Typography>
                  <Typography paragraph>
                      <strong>Fecha de inicio:</strong> XX/XX/XXXX
                  </Typography>
                  <Typography paragraph>
                      <strong>Fecha de entrega:</strong> XX/XX/XXXX
                  </Typography>
                  <Typography paragraph>
                      <strong>Lenguajes:</strong> Pascal
                  </Typography>
  
  
                  {/* ARREGLAR LINK */}
                  
                  <Button link="./project/process" variant="contained" color="primary" className={classes.buttonF} >
                    Postularse a proyecto
                  </Button>
                    
                  <Button link="#" variant="contained" color="primary" className={classes.buttonF} >
                    Ver Postulados
                  </Button>
                </Paper>
              </Grid>
              {/* End sidebar*/}
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
else{
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header type="contractor"/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.cardGrid} maxWidth="md">
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              Título del Proyecto
            </Typography>
            <div className={classes.grid}>
            <Stepper className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8} className={classes.grid}>
              <Typography variant="h4" gutterBottom>
                Descripción del Proyecto:
              </Typography>

              <Typography paragraph>XXXXXXXXXXXXXXXXXXXXXXXXXXXX</Typography>

              <Typography variant="h4" gutterBottom>
                Lenguaje de Programación:
              </Typography>

              <Typography paragraph>
                <li className={classes.listItem}>
                  <Typography component="span" /> Lenguaje
                </li>
                <li className={classes.listItem}>
                  <Typography component="span" /> Lenguaje
                </li>
              </Typography>
            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  Información General
                </Typography>
                <Typography paragraph>
                  <strong>Desarrollador:</strong> Pepito
                </Typography>
                <Typography paragraph>
                  <strong>Fecha de inicio:</strong> XX/XX/XXXX
                </Typography>
                <Typography paragraph>
                  <strong>Fecha de entrega:</strong> XX/XX/XXXX
                </Typography>
                <Typography paragraph>
                  <strong>Lenaguaje:</strong> Pascal
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.buttonC}
                  href="/project/cont/edit">
                  Modificar proyecto
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.buttonC}
                  href="/project/cont/cancel">
                  Cancelar proyecto
                </Button>
              </Paper>
            </Grid>
            {/* End sidebar */}
          </Grid>
        </Container>
        <Copyright />
      </main>
    </div>
  );
}
}
