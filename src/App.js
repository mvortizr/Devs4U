import React from 'react';
import { BrowserRouter as  Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import DashboardFree from './pages/DashboardFree';
import DashboardCont from './pages/DashboardCont';
import Registration from './pages/Registration';
import PerfilFree from './pages/PerfilFree';
import PerfilCont from './pages/PerfilCont';


/* TODO manejar los roles*/
function App() {
  return (
    <Router>
	    <Switch>
	      <Route exact path="/" render={ ()=> <Login/>}/>
	      <Route exact path='/register' render={ ()=> <Registration/>}/>
		  <Route exact path='/dashboardfreelancer' render={ ()=> <DashboardFree/>}/>
		  <Route exact path='/dashboardcontratista' render={ ()=> <DashboardCont/>}/>
		  <Route exact path='/perfilfreelancer' render={ ()=> <PerfilFree/>}/>
		  <Route exact path='/perfilcontratista' render={ ()=> <PerfilCont/>}/>
	      <Route component={NotFound} />
	    </Switch>
    </Router>
  );
}

export default App;
