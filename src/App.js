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
	      <Route exact path='/register' render={ ()=> <Registration/>}/>
		  {/* Dashboard */}
		  <Route exact path='/dashboardfree' render={ ()=> <DashboardFree/>}/>
		  <Route exact path='/dashboardcont' render={ ()=> <DashboardCont/>}/>
		  {/*Profile*/}
		  <Route exact path='/profilefree' render={ ()=> <PerfilFree/>}/>
		  <Route exact path='/profilecont' render={ ()=> <PerfilCont/>}/>
		  <Route exact path='/deleteprofilefree' render={ ()=> <DeleteProfileFree/>}/>
		  <Route exact path='/deleteprofilecont' render={ ()=> <DeleteProfileCont/>}/>
		  {/*Project*/}
		  <Route exact path='/cancelprojectfree' render={ ()=> <CancelProjectFree/>}/>
		  <Route exact path='/cancelprojectcont' render={ ()=> <CancelProjectCont/>}/>
		  <Route exact path='/consultprojectfree' render={ ()=> <ConsultProjectFree/>}/>
          <Route exact path='/consultprojectcont' render={ ()=> <ConsultProjectCont/>}/>
		  {/*Portfolio*/}
		  <Route exact path='/removeprojectportfolio' render={ ()=> <RemoveProjectPortfolio/>}/>
		  <Route exact path='/consultportfolio' render={ ()=> <ConsultPortfolio/>}/>
          {/*Not Found*/}
	      <Route component={NotFound} />
	    </Switch>
    </Router>
  );
}

export default App;
