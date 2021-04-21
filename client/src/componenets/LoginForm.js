
//inside LoginForm parameter I am inhereting props from Register component
//so I can use those code inside this component
// thses props are destructured


const LoginForm = (
    {handleSubmit, email, setEmail, password, setPassword} //props
) =>{
    return (
        <>
            {/* on submit call the function that will send information to the backend */}
            <form onSubmit={handleSubmit} className = "mt-3">

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

                <button disabled = {!email || !password} className = "btn btn-primary">Submit </button>
            </form>
        </>
    )
}

export default LoginForm