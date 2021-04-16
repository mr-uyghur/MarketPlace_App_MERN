//import componenets//pages inside my App
//based on the path show each componenets/page using react-router
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import Link from 'react-router-dom'
import Home from './booking/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import TopNav from './componenets/TopNav'


function App() {
  return (
    //wrap my componenets inside BrowserRouter
    <BrowserRouter>
    {/* Top navigation/menu component will always be on top */}
      <TopNav/>
      <Switch>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/login" component={Login}/>
        <Route exact path = "/register" component={Register}/>
      </Switch>    

    </BrowserRouter>
  );
}

export default App;
