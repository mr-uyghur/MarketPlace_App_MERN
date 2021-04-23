import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux' //access user fro mstate
import {useHistory} from 'react-router-dom'
/*
Create a Nav bar for easy navigation on the page
With conditional rendering
show register and login if user didn't login
*/

const TopNav = () => {
    const dispatch = useDispatch()
    const {auth} = useSelector((state) =>({...state})) //destructured auth from idex.js reducer
    const history = useHistory()
    //to logout the user we just empty the user from local storage and redux 
    const logout= () =>{
        dispatch({
            type: 'LOGOUT',
            payload:null,
        })
        window.localStorage.removeItem('auth')
        history.push("/login")
    }
    return (
        <div className="nav bg-light d-flex justify-content-between">
            <Link className="nav-link" to="/"> Home</Link>
            
            {auth !== null && (
                <button className="nav-link btn btn-warning" onClick = {logout}> Logout</button>
            )}

            {auth === null && (
                <> <Link className="nav-link" to="/login"> Login</Link>
                <Link className="nav-link" to="/register"> Register</Link> </>
            )}
        </div>
    )
}

export default TopNav