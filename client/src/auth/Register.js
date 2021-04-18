//front end registor page 
//this page will show user to enter their name email and password
//that information will be send using axios to backendin req.body
//then backend will save or create a new user in the database 
//complete user register 
import { useState } from 'react'

const Register = () => {
    //create a state to store user information
    const [name,setName] = useState('') //React hook(state)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = () => {
        alert('send user info to backend')
    }

    const registerForm = () => {
        return (
            <>
                {/* on submit call the function that will send information to the backend */}
                <form onSubmit={handleSubmit} className = "mt-3">
                    <div className="form-group mb-3">
                        <label className = "form-lable">Your Name </label>
                        <input type="text"
                            className="form-control"
                            placeholder="Enter name"
                            value={name}
                            onChange={e => setName(e.target.value)} /> {/* anything user types into "onChange" will be available in state */}
                            
                    </div>

                    <div className="form-group mb-3">
                        <label className = "form-lable">Your Email </label>
                        <input type="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} /> {/* anything user types into "onChange" will be available in state */}
                            
                    </div>

                    <div className="form-group mb-3">
                        <label className = "form-lable">Password </label>
                        <input type="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} /> {/* anything user types into "onChange" will be available in state */}
                            
                    </div>

                    <button className = "btn btn-primary">Submit </button>
                </form>
            </>
        )
    }

    return (
        <>

            <div className="container-fluid bg-secondary p-5 text-center">
                <h1>Register</h1>
            </div>
            <div className="container">
                <div className="Row">
                    <div className="col-md-6 offset-mid-3">
                        {registerForm()}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register;