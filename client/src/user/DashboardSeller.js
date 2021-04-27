import DashboardNav from '../componenets/DashboardNav'
import ConnectNav from '../componenets/ConnectNav'
import {Link} from 'react-router-dom'
//sellers can create new hotels on this component

const DashboardSeller = () => {
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
                        <h2> Your Hotels</h2>
                        </div>
                        <div className= "col-md-2">

                        <Link to = '/hotel/new' className = "btn btn-primary">+ Add New </Link>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default DashboardSeller