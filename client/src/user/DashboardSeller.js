import DashboardNav from '../componenets/DashboardNav'
import ConnectNav from '../componenets/ConnectNav'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {HomeOutlined} from '@ant-design/icons'
//sellers can create new hotels on this component

const DashboardSeller = () => {
    //grab user from the state
    const {auth} = useSelector((state) => ({...state}))

    //functions to check if the seller is connected to stripe
    const connected = () => (
        <div className="cotainer-fluid"  >
            <div className="row">
                <div className="col-md-10">
                    <h2> Your Hotels</h2>
                </div>
                <div className="col-md-2">

                    <Link to='/hotel/new' className="btn btn-primary">+ Add New </Link>
                </div>
            </div>
        </div>
    )

    const notConnected = () => (
        <div className="cotainer-fluid"  >
            <div className="row">
                <div className="col-md-6 offset-mid-3 text-center">
                    <div className = "p-5 pointer">
                        <HomeOutlined className = "h1" />
                        <h4> Set up payment method with Stripe </h4>
                        <p className = "lead">
                            Fillout your information for processing payments.
                            </p>
                            <button className ="btn btn-primary mb-3" >
                                Setup payment
                                </button>
                              <p className = "text-muted">
                                  You'll be redirected to Stripe
                                  </p>


                        </div>
                </div>
              
            </div>
        </div>
    )

    return (
        <>
            <div className="cotainer-fluid bg-secondary p-5">
                <ConnectNav />
            </div>

            <div className="cotainer-fluid p-4">
                <DashboardNav />
            </div>

            {/* show connected if user is already connected to stripe, otherwise not connected */}
            {auth && 
            auth.user && 
            auth.user.stripe_seller && 
            auth.user.stripe_seller.charges_enabled ?
            connected() : notConnected()}

           {/* <pre> {JSON.stringify(auth, null, 4)} </pre> */}

        </>
    )
}

export default DashboardSeller