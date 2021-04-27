import DashboardNav from '../componenets/DashboardNav'


const DashboardSeller = () => {
    return(
        <>
        <div className="cotainer-fluid bg-secondary p-5">
            <h1> DashboardSeller</h1>
            </div>

            <div className="cotainer-fluid p-4">
                <DashboardNav/>
                </div>

            <div className="cotainer"  >
                Show all products user has posted and a button to add new
                </div>
        </>
    )
}

export default DashboardSeller