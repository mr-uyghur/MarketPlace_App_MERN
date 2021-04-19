
//inside RegisterForm parameter I am inhereting props from Register component
//so I can use those code inside this component
// thses props are destructured

const RegisterForm = (
    {handleSubmit, name, setName, email, setEmail, password, setPassword} //props
) =>{
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

export default RegisterForm