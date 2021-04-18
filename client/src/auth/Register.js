//front end registor page 
//this page will show user to enter their name email and password
//that information will be send using axios to backendin req.body
//then backend will save or create a new user in the database 
//complete user register 
import { useState } from 'react'
import RegisterForm from '../componenets/RegisterForm'
const Register = () => {
    //create a state to store user information
    const [name,setName] = useState('') //React hook(state)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault() //this prevent page from reloading after submit
        console.table({name, email, password})
    }


    //Use props to pass my states and handleSubmit function to RefisterForm component
    //so I can use these code inside my RegisterForm
    return (
        <>

            <div className="container-fluid bg-secondary p-5 text-center">
                <h1>Register</h1>
            </div>
            <div className="container">
                <div className="Row">
                    <div className="col-md-6 offset-mid-3">
                        <RegisterForm handleSubmit = {handleSubmit}
                        name = {name} setName = {setName}
                        email = {email} setEmail = {setEmail}
                        password = {password} setPassword = {setPassword}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register;