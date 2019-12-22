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
import PerfilConsulFree from './pages/PerfilConsulFree';
import ConsultProjectViewCont from './pages/ConsultProjectViewCont'
import ConsultProjectPortfolio from './pages/ConsultProjectPortfolio';
import EditProject from './pages/EditProject';
import ConsultProjectInDevelopment from './pages/ConsultProjectInDevelopment';
import CreateProject from './pages/CreateProject';
import TestBackend from './pages/TestBackend';
import Dashboard from './pages/Dashboard'
import GestProject from './pages/GestProject'
import ConsultProfile from './pages/ConsultProfile'


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
		  <Route exact path='/dashboard/developer' render={ ()=> <Dashboard type="developer"/>}/>
		  <Route exact path='/dashboard/contractor' render={ ()=> <Dashboard type="contractor"/>}/>
		  {/*Profile*/}
		  <Route exact path='/profile/freelancer' render={ ()=> <ConsultProfile type="developer"/>}/>
		  <Route exact path='/profile/contractor' render={ ()=> <ConsultProfile type="contractor"/>}/>
		  <Route exact path='/profile/modify/free' render={ ()=> <EditProfile type="developer"/>}/>
		  <Route exact path='/profile/modify/cont' render={ ()=> <EditProfile type="contractor"/>}/>
		  {/*<Route exact path='/profile/modify/cont' render={ ()=> <ModPerCont/>}/> */}
			
		{/*Consulta de Perfil freelancer*/}
		 <Route exact path='/profile/consult/freelancer/:id' render={ (props)=> <PerfilConsulFree {...props}/>}/>
		 <Route exact path='/project/view/contractor' render={ ()=> <ConsultProjectViewCont/>}/>

		  {/*Project*/}
		  <Route exact path='/project/manage/freelancer' render={ ()=> <GestProject type="developer"/>}/>
		  <Route exact path='/project/manage/contractor' render={ ()=> <GestProject type="contractor"/>}/>
		  <Route exact path='/project/freelancer' render={ ()=> <ConsultProject type="developer"/>}/>
		  <Route exact path='/project/contractor' render={ ()=> <ConsultProject type="contractor"/>}/>
		  {/* <Route exact path='/project/freelancer/:id' render={ (props) => <ConsultProjectFree {...props}/>}/>
          <Route exact path='/project/contractor' render={ ()=> <ConsultProjectCont/>}/> */}

		  <Route exact path='/project/cont/create' render={ ()=> <CreateProject/>}/>
		  <Route exact path='/project/cont/edit' render={ ()=> <EditProject/>}/>
		  <Route exact path='/project/manage/freelancer/consult' render={ ()=> <ConsultProjectInDevelopment/>}/>
		  <Route exact path='/project/process' render={ ()=> <ProjectProcess/>}/>

		  {/*Portfolio*/}		  
		  <Route exact path='/portafolio' render={ ()=> <ConsultPortfolio type="developer"/>}/>
		  <Route exact path='/portafolio/freelancer/contractor' render={ ()=> <ConsultPortfolio type="contractor"/>}/>
		  <Route exact path='/portafolio/freelancer' render={ ()=> <ConsultPortfolio type="dev"/>}/>
		  <Route exact path='/portafolio/consultar' render={ ()=> <ConsultProjectPortfolio/>}/>

          {/*Not Found*/}
	      <Route component={NotFound} />

	    </Switch>
    </Router>
  );
}

export default App;