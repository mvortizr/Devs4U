import React from 'react';
import { BrowserRouter as  Router, Switch, Route} from "react-router-dom";
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ConsultPortfolio from './pages/ConsultPortfolio';
import ConsultProject from './pages/ConsultProject';
import RecContrasena from './pages/RecContrasena';
import EditProfile from './pages/EditProfile';
import RecContraMail from './pages/RecContraMail';
import EditProject from './pages/EditProject';
import CreateProject from './pages/CreateProject';
import Dashboard from './pages/Dashboard'
import GestProject from './pages/GestProject'
import ConsultMyProfile from './pages/ConsultMyProfile'
import ConsultProfile from './pages/ConsultProfile'
import RateUser from './pages/RateUser'
import ExecuteProject from './pages/ExecuteProject'

import ProjectProcess from './pages/ProjectProcess';

/* TODO manejar los roles*/
function App() {

  return (
    <Router>
	    <Switch>

			{/*Login and Register*/}
			<Route exact path='/' render={ (props)=> <Login {...props}/>}/>
			<Route exact path='/register' render={ (props)=> <Registration {...props}/>}/>
			{/*Recuperar Contraseña*/}
			<Route exact path='/password/set' render={ ()=> <RecContrasena/>}/>
			<Route exact path='/password/recover' render={ ()=> <RecContraMail/>}/>
			{/* Dashboard */}
			<Route exact path='/dashboard/freelancer' render={ ()=> <Dashboard type="freelancer"/>}/>
			<Route exact path='/dashboard/contractor' render={ ()=> <Dashboard type="contractor"/>}/>
			{/*Profile*/}
				{/* Consultar Propio*/}
				<Route exact path='/profile/freelancer' render={ (props)=> <ConsultMyProfile {...props}/>}/>
				<Route exact path='/profile/contractor' render={ (props)=> <ConsultMyProfile {...props} />}/>
				{/* Consultar Anonimo */}
				<Route exact path='/view/profile/:id/:rol' render={ (props)=> <ConsultProfile {...props}/>}/>
				{/* Modificar */}
				<Route exact path='/profile/modify' render={ (props)=> <EditProfile {...props}/>}/>
				
				<Route path={['/http:', '/https:']} component={props => {
					window.location.replace(props.location.pathname.substr(1)) // substr(1) removes the preceding '/'
					return null
				}}/>
			{/*Proyecto*/}
				{/* Crear */}
				<Route exact path='/project/create' render={ ()=> <CreateProject/>}/>
				{/* Modificar */}
				<Route exact path='/project/edit' render={ (props)=> <EditProject{...props}/>}/>
				{/* Consultar */}
				<Route exact path='/project/manage/freelancer' render={ ()=> <GestProject type="developer"/>}/>
				<Route exact path='/project/manage/contractor' render={ ()=> <GestProject type="contractor"/>}/>
				{/* Consultar Proyecto Abierto */}
				<Route exact path='/project/freelancer/open' render={ ()=> <ConsultProject type="developerSP"/>}/>
				<Route exact path='/project/contractor/open' render={ ()=> <ConsultProject type="contractorSP"/>}/>
				{/* Consultar Proyecto Propio en Ejecución*/}
				<Route exact path='/project/freelancer' render={ ()=> <ConsultProject type="developerEj"/>}/>
				<Route exact path='/project/contractor' render={ ()=> <ConsultProject type="contractorEj"/>}/>
				{/* Consultar Proyecto Anonimo */}
				<Route exact path='/view/project/freelancer' render={ ()=> <ConsultProject type="developer"/>}/>
				<Route exact path='/view/project/contractor' render={ ()=> <ConsultProject type="contractor"/>}/>

			{/*Portafolio*/}	
				{/* Consultar Portafolio Propio */}
				<Route exact path='/portafolio' render={ ()=> <ConsultPortfolio type="developer"/>}/>
				{/* Consultar Portafolio Anonimo */}
				<Route exact path='/view/portafolio/contractor' render={ ()=> <ConsultPortfolio type="contractor"/>}/>
				<Route exact path='/view/portafolio/freelancer' render={ ()=> <ConsultPortfolio type="dev"/>}/>

			{/* Ejecutar Proyecto */}
				<Route exact path='/developer/postulates' render={ ()=> <ExecuteProject type="developer"/>}/>
				<Route exact path='/contractor/postulates' render={ ()=> <ExecuteProject type="contractor"/>}/>

			{/* Calificar Usuario */}
				<Route exact path='/developer/rate' render={ ()=> <RateUser type="developer"/>}/>
				<Route exact path='/contractor/rate' render={ ()=> <RateUser type="contractor"/>}/>

			{/*Not Found*/}
			<Route component={NotFound} />

	    </Switch>
    </Router>
  );
}

export default App;
