//front end registor page 
//this page will show user to enter their name email and password
//that information will be send using axios to backendin req.body
//then backend will save or create a new user in the database 
//complete user register 
import { useState } from 'react'
import RegisterForm from '../componenets/RegisterForm'
import {register} from '../action/auth'
import axios from 'axios'
import { toast } from 'react-toastify';


const Register = ({history}) => { //history props for redirecting users to login page 
    //create a state to store user information
    const [name,setName] = useState('') //React hook(state)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault() //this prevent page from reloading after submit
        // use axios post and send data to backend
        try {
            //api endpoint are imported from .env file for readibility 
            const res = await register({ //register function is the axios post request
                    name:name,
                    email:email,
                    password:password,
            })
        console.log("Registered User ====>",res)
        toast.success('Registered scuessfully, please login')
        history.push("/login")
        } catch(err){
            // console.log(err)
            if(err.response.status === 400) toast(err.response.data)
        }
    }

//-------------------------------------------------------------------------------------------
    //Use props to pass my states and handleSubmit function to RefisterForm component
    //so I can use these code inside my RegisterForm
//------------------------------------------------------------------------------------------
    return (
        <>
            <div className="container-fluid bg-secondary p-5 text-center">
                <h1>Register</h1>
            </div>

            <div className="container">
                <div className="Row">
                    <div className="col-md-6 offset-mid-3">
                        <RegisterForm handleSubmit = {handleSubmit} //props
                        name = {name} setName = {setName}   //props
                        email = {email} setEmail = {setEmail} //props
                        password = {password} setPassword = {setPassword} //props
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register;