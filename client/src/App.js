//import componenets//pages inside my App
//based on the path show each componenets/page using react-router
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import Link from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopNav from './componenets/TopNav'
import PrivateRoute from './componenets/PrivateRoute'
//componenets
import Home from './booking/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import Dashboard from './user/Dashboard'
import DashboardSeller from './user/DashboardSeller'
import NewHotel from './hotels/NewHotel'


function App() {
  return (
    //wrap my componenets inside BrowserRouter
    <BrowserRouter>
    {/* Top navigation/menu component will always be on top */}
      <TopNav/>
      <ToastContainer/>
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/login" component={Login}/>
        <Route exact path = "/register" component={Register}/>
        <PrivateRoute exact path = "/dashboard" component={Dashboard}/>
        <PrivateRoute exact path = "/dashboard/seller" component={DashboardSeller}/>
        <PrivateRoute exact path = "/hotel/new" component={NewHotel}/>
      </Switch>    

    </BrowserRouter>
  );
}

export default App;
