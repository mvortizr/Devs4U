import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import WorkIcon from '@material-ui/icons/Work';
import ChatIcon from '@material-ui/icons/Chat';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

export const mainListItems = (
  <div>
    <ListItem button component="a" href="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Panel de Control" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Trabajos Ofertados" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ChatIcon />
      </ListItemIcon>
      <ListItemText primary="Chats de Negocios" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentTurnedInIcon />
      </ListItemIcon>
      <ListItemText primary="Entregas de Proyectos" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Opciones de Usuario</ListSubheader>
    <ListItem button component="a" href="/profilecont">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Perfil" />
    </ListItem>
    <ListItem button component="a" href="/login">
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Cerrar Sesión" />
    </ListItem>
  </div>
);