import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux'
/*
dashboard protected routes only for logged in users
protected routes --- post a product for selling
a protected page that is accessible only for logged in users
*/

const PrivateRoute = ({...rest}) => {
    const {auth} = useSelector((state) => ({...state})) //this gives the user auth from our state

    return auth && auth.token ? <Route {...rest}/> : <Redirect to = "/login" />
}

export default PrivateRoute