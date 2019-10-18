import React from 'react';
import { BrowserRouter as  Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import DashboardFree from './pages/DashboardFree';
import DashboardCont from './pages/DashboardCont';
import Registration from './pages/Registration';


/* TODO manejar los roles*/
function App() {
  return (
    <Router>
	    <Switch>
	      <Route exact path="/" render={ ()=> <Home/>}/>
	      <Route exact path='/login' render={ ()=> <Login/>}/>
	      <Route exact path='/register' render={ ()=> <Registration/>}/>
		  <Route exact path='/dashboardfreelancer' render={ ()=> <DashboardFree/>}/>
		  <Route exact path='/dashboardcontratista' render={ ()=> <DashboardCont/>}/>
	      <Route component={NotFound} />
	    </Switch>
    </Router>
  );
}

export default App;
