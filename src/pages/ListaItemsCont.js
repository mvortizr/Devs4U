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
import {Link}from "react-router-dom";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

export const mainListItems = (
  <div>
   <Link to="/dashboard/contractor" style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
       <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>
    </Link>


    <Link to="/project/manage/contractor" style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
    <ListItem button>
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Proyectos" />
    </ListItem>
    </Link>
    {/*
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
    */}
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Opciones de Usuario</ListSubheader>
     <Link to="/profile/contractor" style={{ textDecoration: 'none',color: 'rgb(33,40,53)' }}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Perfil" />
      </ListItem>
    </Link>

  </div>
);