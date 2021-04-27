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


const Dashboard = () => {
    return(
        <>
        <div className="cotainer-fluid bg-secondary p-5">
            <h1> Dashboard</h1>
            </div>

            <div className="cotainer-fluid p-4">
                <DashboardNav/>
                </div>

            <div className="cotainer"  >
                Show all products and a button for browsing them
                </div>
        </>
    )
}

export default Dashboard