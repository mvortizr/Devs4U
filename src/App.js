import React from 'react';
import { BrowserRouter as  Router, Switch, Route} from "react-router-dom";
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ConsultPortfolio from './pages/ConsultPortfolio';
import ConsultMyPortfolio from './pages/ConsultMyPortfolio';
import ConsultProject from './pages/ConsultProject';
import RecContrasena from './pages/RecContrasena';
import EditProfile from './pages/EditProfile';
import RecContraMail from './pages/RecContraMail';
import EditProject from './pages/EditProject';
import CreateProject from './pages/CreateProject';
import Dashboard from './pages/Dashboard'
import DashboardFree from './pages/DashboardFree'
import GestProject from './pages/GestProject'
import GestProjectFree from './pages/GestProjectFree'
import ConsultMyProfile from './pages/ConsultMyProfile'
import ConsultProfile from './pages/ConsultProfile'
import RateUser from './pages/RateUser'
import ExecuteProject from './pages/ExecuteProject'
import ReviewProject from './pages/ReviewProject'
import SearchProfile from './pages/SearchProfile'
import SearchProject from './pages/SearchProject'
import SendProject from './pages/SendProject'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

/* TODO manejar los roles*/
function App() {

  return (
    <Router>
	    <Switch>
	    	<MuiPickersUtilsProvider utils={DateFnsUtils}>
			{/*Login and Register*/}
			<Route exact path='/' render={ (props)=> <Login {...props}/>}/>
			<Route exact path='/register' render={ (props)=> <Registration {...props}/>}/>
			{/*Recuperar Contraseña*/}
			<Route exact path='/password/set' render={ ()=> <RecContrasena/>}/>
			<Route exact path='/password/recover' render={ ()=> <RecContraMail/>}/>
			{/* Dashboard */}
			<Route exact path='/dashboard/freelancer' render={ ()=> <DashboardFree />}/>
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
				<Route exact path='/project/create' render={ (props)=> <CreateProject {...props}/>}/>
				{/* Modificar */}
				<Route exact path='/project/edit/:id' render={ (props)=> <EditProject{...props}/>}/>
				{/* Consultar */}
				<Route exact path='/project/manage/freelancer' render={ (props)=> <GestProjectFree {...props}/>}/>
				<Route exact path='/project/manage/contractor' render={ (props)=> <GestProject {...props}/>}/>
				{/* Consultar Proyecto Abierto */}
				<Route exact path='/project/view/:id' render={ (props)=> <ConsultProject {...props}/>}/>

			{/*Buscador*/ }
				<Route  path='/search/profile' render={ (props)=> <SearchProfile {...props}/>}/>
				<Route  path='/search/project' render={ (props)=> <SearchProject {...props}/>}/>



				

			{/*Portafolio*/}	
				{/* Consultar Portafolio Propio */}
				<Route exact path='/portafolio' render={ ()=> <ConsultMyPortfolio />}/>
				{/* Consultar Portafolio Anonimo */}
				<Route exact path='/view/portafolio/:id' render={ (props)=> <ConsultPortfolio {...props}/>}/>
				

			{/* Ejecutar Proyecto */}
				<Route exact path='/project/execute/:id' render={ (props)=> <ExecuteProject {...props}/>}/>
				

			{/* Entregar Proyecto */}
			<Route exact path='/developer/project/send' render={ ()=> <SendProject/>}/>

			{/* Revisar Proyecto */}
				<Route exact path='/contractor/project/review' render={ ()=> <ReviewProject />}/>
		
			{/* Calificar Usuario */}
				<Route exact path='/developer/rate' render={ ()=> <RateUser type="developer"/>}/>
				<Route exact path='/contractor/rate' render={ ()=> <RateUser type="contractor"/>}/>


			{/*Not Found*/}
			<Route component={NotFound} />
			</MuiPickersUtilsProvider>

	    </Switch>
    </Router>
  );
}

export default App;
