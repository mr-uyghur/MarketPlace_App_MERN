import { Link } from 'react-router-dom'

/*
Create a Nav bar for easy navigation on the page
*/

const TopNav = () => {
    return (
        <div className="nav bg-light d-flex justify-content-between">
            <Link className="nav-link" to="/"> Home</Link>
            <Link className="nav-link" to="/login"> Login</Link>
            <Link className="nav-link" to="/register"> Register</Link>
        </div>
    )
}

export default TopNav