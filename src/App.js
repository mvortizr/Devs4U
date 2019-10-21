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



/* TODO manejar los roles*/
function App() {
  return (
    <Router>
	    <Switch>

		  {/*Login and Register*/}
	      <Route exact path='/login' render={ ()=> <Login/>}/>
	      <Route exact path='/' render={ ()=> <Login/>}/>
	      <Route exact path='/register' render={ ()=> <Registration/>}/>
		  {/* Dashboard */}
		  <Route exact path='/dashboard/freelancer' render={ ()=> <DashboardFree/>}/>
		  <Route exact path='/dashboard/contractor' render={ ()=> <DashboardCont/>}/>
		  {/*Profile*/}
		  <Route exact path='/profile/freelancer' render={ ()=> <PerfilFree/>}/>
		  <Route exact path='/profile/contractor' render={ ()=> <PerfilCont/>}/>
		  <Route exact path='/deleteprofilefree' render={ ()=> <DeleteProfileFree/>}/>
		  <Route exact path='/deleteprofilecont' render={ ()=> <DeleteProfileCont/>}/>
		  {/*Project*/}
		  <Route exact path='/cancelprojectfree' render={ ()=> <CancelProjectFree/>}/>
		  <Route exact path='/cancelprojectcont' render={ ()=> <CancelProjectCont/>}/>
		  <Route exact path='/project/freelancer' render={ ()=> <ConsultProjectFree/>}/>
          <Route exact path='/project/contractor' render={ ()=> <ConsultProjectCont/>}/>
		  {/*Portfolio*/}
		  <Route exact path='/removeprojectportfolio' render={ ()=> <RemoveProjectPortfolio/>}/>
		  <Route exact path='/portfolio' render={ ()=> <ConsultPortfolio/>}/>
          {/*Not Found*/}

	      <Route component={NotFound} />
	    </Switch>
    </Router>
  );
}

export default App;
