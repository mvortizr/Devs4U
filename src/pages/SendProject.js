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
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link as DomLink } from 'react-router-dom'
import Header from './Header'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
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
  butac: {
    marginTop: "30px",
    marginLeft: "20px",
    color:"#FFFFFF",
    backgroundColor: "#299DE8",
  },
  but: {
    marginTop: "30px",
    marginLeft: "20px",
  },
  butelm: {
    marginLeft: "300px",
    color:"#FFFFFF",
    backgroundColor: "#FF1E1E",
  },
  butcan: {
    marginTop: "30px",
    marginLeft: "300px"
  },
  input: {
    display: 'none',
  },
  centerButton:{
    display:'flex',
    justifyContent:'center'
  },
   wrap:{
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width:'250px',
  }
}))

export default function ReviewProject(props) {
  const classes = useStyles();
  const [image, setImage] = React.useState({preview: '', raw: ''})
  const[imageName,setImageName] = React.useState(undefined)
  const projectId = props.match.params.id
  
  const handleChange = (e) => {
    
    setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0]
    })

    setImageName(e.target.files[0].name)
  }

  const handleDeleteFile= () => {
    setImage({preview: '', raw: ''})
    setImageName(undefined)
  }

  const handleUpload = async (e) => {
    e.preventDefault()

    console.log('uploading')


      const formData = new FormData()
      formData.append('image', image.raw)
      //console.log('formData',formData)
      try {
        //await axios.put('/profile/addphoto', {image: image.raw}, config)
        axios({ method: 'post',
          validateStatus: function(status) {
            return status >= 200 && status < 500; 
          },
          url:`/project/upload/file/${projectId}`, 
          withCredentials:true,
          data:formData,
        })
        .then(response =>{
            console.log('upload res',response)

            if(response.status === 200 || response.status === 201 ){
              alert('El archivo se ha cargado correctamente')
              props.history.push(`/project/view/${projectId}`)
                 
            } 
            
        })
        
      } catch (error) {
        console.log(error.response)
      }
    
  }
  
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header type="developer"/>
            <main className={classes.content}>
            {console.log('image', image)}
            <div className={classes.appBarSpacer} />
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid item xs={12} md={4}>
                    <Typography component="h1" variant="h5" color="textPrimary" gutterBottom>
                        Etapa: Ejecución 
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography component="h1" variant="h6" color="textPrimary" gutterBottom>
                        Para promover el proyecto a la etapa de revisión, debe cargar los archivos entregables del proyecto en formato zip o rar
                    </Typography>
                    <br/>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Divider/>
                </Grid>
                <form onSubmit={handleUpload}> 
                <input
                  accept=".zip,.rar"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  onChange={handleChange}
                  type="file"
                />

              <DomLink
                to={`/project/view/${projectId}`}
                  style={{
                          textDecoration: 'none',
                          color: 'rgb(33,40,53)'
              }}>
                
                <Button variant="contained" className={classes.butcan}>
                    Cancelar
                </Button>

              </DomLink>
                <label htmlFor="contained-button-file">            
                  <Button variant="contained" className={classes.butac} component="span">
                    Adjuntar Archivo 
                  </Button>
                </label>
                {imageName?(
                <>
                <Grid container spacing={4} className={classes.grid}>
                  
                    <Grid item key={imageName} xs={12} sm={6} md={12}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                        <Typography content="h2" variant="h6" className={classes.wrap}> 
                            {imageName}
                        </Typography>
                          <Button variant="contained" className={classes.butelm} onClick={handleDeleteFile}>
                                Eliminar
                            </Button>
                        </CardContent>
                    </Card>
                    </Grid>
                
                </Grid>
                
                <div className={classes.centerButton}>
                  <Button variant="contained" className={classes.butac} type="submit">
                      Realizar Entrega
                  </Button>
                </div>

                </>

                ):null}
               
                
                </form>
            </Container>

            <Copyright />
            </main>
        </div>
        );
}
