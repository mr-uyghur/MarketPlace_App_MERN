import {userSelector, useSelector, useStore} from 'react-redux'

const Home = () =>{
    //useSelector takes a function and returns a state
const { user } = useSelector((state) =>({...state}))
    return (
        <div className="container-fluid h1 p-5 text-center">
            Home page
            {JSON.stringify(user)}
            </div>
    )
}

export default Home;