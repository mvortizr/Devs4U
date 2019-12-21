import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import {Link}from "react-router-dom";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

export const mainListItems = (
  <div>
  <Link to="/dashboard/developer" style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>
  </Link>
  
  <Link to="/project/manage/freelancer" style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
    <ListItem button>
      <ListItemIcon>
        <AssignmentTurnedInIcon />
      </ListItemIcon>
      <ListItemText primary="Proyectos" />
    </ListItem>
   </Link>

    <Link to="/portafolio" style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
    <ListItem button>
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Portafolio" />
    </ListItem>
      </Link>
  </div>

);

export const secondaryListItems = (
  <div>
  <Link to="/profile/freelancer" style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
    <ListSubheader inset>Opciones de Usuario</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Perfil" />
    </ListItem>
    </Link>
  </div>
);