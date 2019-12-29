import React, {useState} from 'react'
import clsx from 'clsx'
import {
  Typography,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Divider,
  IconButton,
  Badge,
  CssBaseline,
  Card
} from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { mainListItemsC, secondaryListItemsC } from './ListaItemsCont'
import { mainListItems, secondaryListItems } from './ListaItemsFree'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import fotoPerfil from './images/fotoPerfil.png';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

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
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    display: 'flex',
    flexWrap: 'wrap',
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
  searchbar: {
    marginRight: "100px"
  },
  foto:{
    width: '40px',
    height: '40px',
    borderRadius: '20px',
    marginLeft: "15px",
    marginRight: "10px"
  },
  formControl: {
    margin: theme.spacing(5),
    minWidth: 350,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    maxHeight: "180px",
    display: 'flex',
    flexDirection: 'column'
  },
}))

export default function Header(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  let history = useHistory();
  const [buscar, setBuscar] = React.useState('');
  const [search, setSearch] = useState(String)
  const [open2, setOpen2] = React.useState(false);
  var cards = [1, 2, 3]
  const [devs,setDevs] = React.useState(undefined);
  const [projects,setProjects] = React.useState(undefined);
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  const handleDrawerOpen = () => {
    setOpen(true)
  };
  const handleDrawerClose = () => {
    setOpen(false)
  };
  const handleClickOpen = () => {
    setOpen2(true);
  };
  const handleClose = () => {
    setOpen2(false);
  };

  const handleLogOut = () => {
    console.log('logging out frontend')
    axios.post('/logout').then(
      () => {
        history.push('/')
        sessionStorage.removeItem('rol');
        sessionStorage.removeItem('nombre');
        sessionStorage.removeItem('foto');
      },
      error => {
        console.log(error)
      }
    )
  }

  React.useEffect(() => {
       axios.post(`/user/see/all`)
            .then((response) => {
                 console.log('response perfil', response.data);
                 setDevs(response.data);
            }, (error) => {
                console.log(error);
        });
     
    }, []);
  
    const handleChange = event => {
      setBuscar(event.target.value);
    };

    let redir = () => {
      if(props.type=="contractor"){
        window.location.href = `/search/contractor`;
        //window.location.href = `/search/contractor${search}`;
      }
      else{
        window.location.href = `/search/freelancer`;
      }
    }  

if(props.type=="contractor"){
        return (
            <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="absolute"
                className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(
                    classes.menuButton,
                    open && classes.menuButtonHidden
                    )}>
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h4"
                    color="inherit"
                    noWrap
                    className={classes.title}>
                    Devs4U
                </Typography>

                {/*Buscador*/}
                <form className={classes.searchbar} onSubmit={e => e.preventDefault() || redir()}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                  type="search" 
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={e => setSearch(e.target.value)}  
                  />
                <Select value={buscar} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
                  <MenuItem value="">Buscar Perfil</MenuItem>
                  <MenuItem value={1}>Buscar Proyecto</MenuItem>
                </Select>
              </form>
              
                  <Divider/>
                <IconButton onClick={handleClickOpen} color="inherit">
                    {/*badgeContent muestra la cantidad de notificaciones*/}
                    <Badge badgeContent={0} color="secondary">
                    <NotificationsIcon />
                    </Badge>
                </IconButton>
                <Dialog disableBackdropClick disableEscapeKeyDown open={open2} onClose={handleClose}>
                <DialogTitle>Notificaciones</DialogTitle>
                <DialogContent>
                {cards.map(card => (
                  <Card className={classes.card}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="demo-dialog-native">Tu proyecto fue aceptado</InputLabel>
                  </FormControl>
                  </Card>
                ))}
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Ok
                  </Button>
                </DialogActions>
              </Dialog>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
                }}
                open={open}>
                <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
                </div>
                <Divider />
                <List>{mainListItemsC}</List>
                <Divider />
                <List>{secondaryListItemsC}</List>
    
                <List>
                <ListItem button>
                    <ListItemIcon>
                    <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cerrar Sesión" onClick={handleLogOut} />
                </ListItem>
                </List>
            </Drawer>
            </div>
        );
  } 
  else{
        return (
            <div className={classes.root}>
              <CssBaseline />
              <AppBar
                position="absolute"
                className={clsx(classes.appBarFree, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(
                      classes.menuButton,
                      open && classes.menuButtonHidden
                    )}>
                    <MenuIcon />
                  </IconButton>
                  <Typography
                    component="h1"
                    variant="h4"
                    color="inherit"
                    noWrap
                    className={classes.title}>
                    Devs4U
                  </Typography>
                  
                {/*Buscador*/}
                <form className={classes.searchbar} onSubmit={e => e.preventDefault() || redir()}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                  type="search" 
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={e => setSearch(e.target.value)}  
                  />
                <Select value={buscar} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
                  <MenuItem value="">Buscar Perfil</MenuItem>
                  <MenuItem value={1}>Buscar Proyecto</MenuItem>
                </Select>
              </form>

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
                  paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
                }}
                open={open}>
                <div className={classes.toolbarIcon}>
                  <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                  </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
                <List>
                  <ListItem button>
                    <ListItemIcon>
                      <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cerrar Sesión" onClick={handleLogOut} />
                  </ListItem>
                </List>
              </Drawer>
            </div>
          ); 
  }
}