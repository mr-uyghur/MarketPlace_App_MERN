/*
This dashboard is a protected route
only accessible for loggedin users

----------------------------------------------------------------
in this compoenent show a Nav Bar that contains 2 componenets
1.will show all user purchases and a button to browse hotes
2.shows all the products user have posted and a button to add new
----------------------------------------------------------------
*/

import DashboardNav from '../componenets/DashboardNav'
import ConnectNav from '../componenets/ConnectNav'
import {Link} from 'react-router-dom'


const Dashboard = () => {
    return(
        <>
        <div className="cotainer-fluid bg-secondary p-5">
            <ConnectNav/>
            </div>

            <div className="cotainer-fluid p-4">
                <DashboardNav/>
                </div>

            <div className="cotainer-fluid"  >
                <div className = "row">
                    <div className= "col-md-10">
                        <h2> Your bookings</h2>
                        </div>
                        <div className= "col-md-2">
                        <Link to = '/' className = "btn btn-primary">Browse Hotel </Link>
                        </div>

                    </div>
                </div>
        </>
    )
}

export default Dashboard

