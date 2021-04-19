//API controller
//information send from the frontend with post request
// is recieved as request body on our backend
//request body is recieved as JSON data
import User from '../models/user'
// controller method to handle user register
export const register = async (req, res) =>{
    //user data information send from the front end can be accessed with req body
    console.log(req.body)
    //create user schema with user properties
    // and saved properties in the database
    const {name, email, password} = req.body // destructure the info we need from req.body
    //validation response
    if(!name) return res.status(400).send("Name is required")
    if(!password || password.length < 6) return res.status(400).send("Password is required and minim of 6 characters long")
    //validate if email is unique, if user already exists with this email
    let userExist = await User.findOne({email: email}).exec()  
    if(userExist) return res.status(400).send('This email is already exists')
    //ones these validations are passed then go ahead and create the user 
    const user = new User(req.body)
    try {
        await user.save()
        console.log('USER CREATED', user)
        return res.json({ok:true})
    } catch(err){
        console.log('Err for saving user: ', err)
        return res.status(400).send('Error. Try again')
    }

}