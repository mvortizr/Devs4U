import React,{useState} from 'react';
import { makeStyles,fade } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
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
    color: "#FFFFFF"
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
}));

export default function CustomizedInputBase() {
  const classes = useStyles();
  const [selectBuscar, setSelectBuscar] = React.useState(1);
  const [search, setSearch] = useState(String)
  let history = useHistory();
 
  const handleChange = event => {
      setSelectBuscar(event.target.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault() 
    // /search/profile/:query
    // /search/project/:query

    if(selectBuscar===1){
      history.push(`/search/profile/${search}`)
    } else {
      history.push(`/search/project/${search}`)
    }

  }


  return (
   
    <form className={classes.searchbar} onSubmit={handleSearchSubmit}>
     {console.log('search item', search)}
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            type="search" 
            placeholder="Buscar..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            value={search}
            inputProps={{ 'aria-label': 'search' }}
            onChange={e => setSearch(e.target.value)}  
          />
        <Select value={selectBuscar} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
          <MenuItem value={1}>Buscar Perfil</MenuItem>
          <MenuItem value={2}>Buscar Proyecto</MenuItem>
        </Select>
    </form>
  );
}