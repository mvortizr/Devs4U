import React from 'react';
import { BrowserRouter as  Router, Switch, Route} from "react-router-dom";
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import DashboardFree from './pages/DashboardFree';
import DashboardCont from './pages/DashboardCont';
import Registration from './pages/Registration';
import ConsultPortfolio from './pages/ConsultPortfolio';
import ConsultProjectCont from './pages/ConsultProjectCont';
import ConsultProjectFree from './pages/ConsultProjectFree';
import RemoveProjectPortfolio from './pages/RemoveProjectPortfolio';
import CancelProjectFree from './pages/CancelProjectFree';
import CancelProjectCont from './pages/CancelProjectCont';
import DeleteProfileFree from './pages/DeleteProfileFree';
import DeleteProfileCont from './pages/DeleteProfileCont';
import PerfilCont from './pages/PerfilCont';
import PerfilFree from './pages/PerfilFree';
import RecContrasena from './pages/RecContrasena';
import ModPerFree from './pages/ModificarPerfilFree';
import ModPerCont from './pages/ModificarPerfilCont';
import RecContraMail from './pages/RecContraMail';
import GestProjectContract from './pages/GestProjectContract';
import GestProjectFreelancer from './pages/GestProjectFree';
import PerfilConsulFree from './pages/PerfilConsulFree';
import ConsultPortfolioCont from './pages/ConsultPortfolioCont';
import ConsultProjectViewCont from './pages/ConsultProjectViewCont'
import ConsultProjectPortfolio from './pages/ConsultProjectPortfolio';
import EditProject from './pages/EditProject';
import ConsultProjectInDevelopment from './pages/ConsultProjectInDevelopment';
import CreateProject from './pages/CreateProject';
import TestBackend from './pages/TestBackend';


import ProjectProcess from './pages/ProjectProcess';

/* TODO manejar los roles*/
function App() {
  return (
    <Router>
	    <Switch>
	    	<Route exact path='/test' render={ ()=> <TestBackend/>}/>

		  {/*Login and Register*/}
	      <Route exact path='/' render={ ()=> <Login />}/>
	      <Route exact path='/register' render={ ()=> <Registration/>}/>
		  {/*Recuperar Contraseña*/}
		  <Route exact path='/password/set' render={ ()=> <RecContrasena/>}/>
		  <Route exact path='/password/recover' render={ ()=> <RecContraMail/>}/>
		  {/* Dashboard */}
		  <Route exact path='/dashboard/developer' render={ ()=> <DashboardFree/>}/>
		  <Route exact path='/dashboard/contractor' render={ ()=> <DashboardCont/>}/>
		  {/*Profile*/}
		  <Route exact path='/profile/freelancer' render={ ()=> <PerfilFree />}/>
		  <Route exact path='/profile/contractor' render={ ()=> <PerfilCont/>}/>
			<Route exact path='/profile/modify/free' render={ ()=> <ModPerFree/>}/>
		  <Route exact path='/profile/modify/cont' render={ ()=> <ModPerCont/>}/>
			
		{/*Consulta de Perfil freelancer*/}
		 <Route exact path='/profile/consult/freelancer' render={ ()=> <PerfilConsulFree/>}/>
		 <Route exact path='/profile/consult/freelancer/portfolio' render={ ()=> <ConsultPortfolioCont/>}/>
		 <Route exact path='/project/view/contractor' render={ ()=> <ConsultProjectViewCont/>}/>

		  {/*Project*/}
		  <Route exact path='/project/free/cancel' render={ ()=> <CancelProjectFree/>}/>
		  <Route exact path='/project/cont/cancel' render={ ()=> <CancelProjectCont/>}/>
		  <Route exact path='/project/freelancer' render={ ()=> <ConsultProjectFree/>}/>
		  <Route exact path='/project/manage/freelancer' render={ ()=> <GestProjectFreelancer/>}/>
		  <Route exact path='/project/manage/contractor' render={ ()=> <GestProjectContract/>}/>
          <Route exact path='/project/contractor' render={ ()=> <ConsultProjectCont/>}/>

		  <Route exact path='/project/cont/create' render={ ()=> <CreateProject/>}/>
		  <Route exact path='/project/cont/edit' render={ ()=> <EditProject/>}/>
		  <Route exact path='/project/manage/freelancer/consult' render={ ()=> <ConsultProjectInDevelopment/>}/>
		  <Route exact path='/project/process' render={ ()=> <ProjectProcess/>}/>

		  
		  {/*Portfolio*/}		  
		  <Route exact path='/portafolio' render={ ()=> <ConsultPortfolio/>}/>
		  <Route exact path='/portafolio/consultar' render={ ()=> <ConsultProjectPortfolio/>}/>

          {/*Not Found*/}
	      <Route component={NotFound} />

	  		{/*No las usare*/}
	  		<Route exact path='/removeprojectportfolio' render={ ()=> <RemoveProjectPortfolio/>}/>
	  		<Route exact path='/profile/delete' render={ ()=> <DeleteProfileFree/>}/>
		  <Route exact path='/profile/delete' render={ ()=> <DeleteProfileCont/>}/>
	    </Switch>
    </Router>
  );
}

export default App;
