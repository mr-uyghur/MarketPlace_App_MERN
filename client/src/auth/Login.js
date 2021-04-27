import {toast} from 'react-toastify'
import {login} from '../action/auth'
import LoginForm from '../componenets/LoginForm'
import { useState } from 'react'
import {useDispatch} from 'react-redux'

/*
--------------------------------------------------------------------------------
Login Logic Todos:
Login, token and user is sent from backend as response to front end
save the token and user to redux state(global state, so we can access this user token in any pages) and also in local storage
then the logged in user can access the routes made for registered users (posting product booking product etc)
send this token in the req.headers
then backend can check the token to see if it is valid
use expressJwt middleware to extract user id from toekn 
then user that user id to get current logged in user
--------------------------------------------------------------------------------
*/

const Login = ({history}) =>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        console.log("SEND LOGIN DATA", {email, password})
        try{
            let res = await login({email,password})
            if(res.data){
                console.log('SAVE USER RES IN REDUX AND LOCAL STORAGE THEN REDIRECT TO ===>', res.data)
                
            }
            //save user and token to local storage
            //save res.data in JSON format in local storage
            window.localStorage.setItem('auth',JSON.stringify(res.data))
            //save user and token to redux using dispatch
            dispatch({
                type : "LOGGED_IN_USER",
                payload: res.data
            })
            //refirect logged in user
            history.push("/dashboard")
        } catch(err){
            // console.log(err)
            // toast.error(err.response.data)
        }
    }

    return (
        <>
        <div className="container-fluid bg-secondary p-5 text-center">
            <h1> Log in </h1>
            </div>

            <div className = "container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                            <LoginForm
                            email = {email}
                            setEmail = {setEmail}
                            password = {password}
                            setPassword = {setPassword}
                            handleSubmit = {handleSubmit}
                            />
                        </div>
                </div>
                </div>
            </>
    )
}

export default Login;