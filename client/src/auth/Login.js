import {toast} from 'react-toastify'
import {login} from '../action/auth'
import LoginForm from '../componenets/LoginForm'
import { useState } from 'react'

const Login = () =>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = async(e) =>{
        e.preventDefault()
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