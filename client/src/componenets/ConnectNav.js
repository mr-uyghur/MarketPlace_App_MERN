import {useSelector} from 'react-redux' //access user from the redux state and check if user is connect to Strip
import {Card, Avatar} from 'antd' //imports from ant design
import moment from 'moment'

const {Meta} = Card
//use users first name as the profile avatar

const ConnectNav = () => {
    //grab user from redux with useSelector
    const {auth} = useSelector((state) => ({...state}))
    const {user} = auth

    return (
        <>
        <div className="d-flex justify-content-around">
            <Card>
                <Meta avatar = {<Avatar> {user.name[0]}</Avatar>}//user avatar first letter of users name
                title = {user.name}
                description = {`Joined ${moment(user.createdAt).fromNow()}`}/>
                </Card>

                {/* for seller users, show their pending transactions and balance */}

                {auth && auth.user && auth.user.strip_seller && auth.user.strip_seller.charges_enabled && (
                    <>
                    <div>Pending Balance
                    </div>

                <div>Payour settings
                    </div>
                    </>
                )}

                </div>
        </>
    )
}

export default ConnectNav