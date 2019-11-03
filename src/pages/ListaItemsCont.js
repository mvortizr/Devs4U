import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import {Link}from "react-router-dom";

export const mainListItemsC = (
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

export const secondaryListItemsC = (
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
