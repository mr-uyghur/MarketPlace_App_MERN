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
    if(userExist) return res.status(400).send('This email already exists')
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

//Login Controller
/*
----------------------------------------------------------------
Find the user by email from the database 
compare user's hashed password with incoming password
middle ware for compare password is in user model 
if password match, user login is successful
then user respose with JWT(Jason Web Token) will be send back to the front end
with JWT user token, that user then can have access to website features like posting or booking etc
----------------------------------------------------------------
*/

export const login = async (req, res) => {
    const {email, password} = req.body // destructured the information I'm receiving
    try{
        //check if user's email exists
        let user = await User.findOne({email}).exec() //user var finds email from User Model
        if(!user) res.status(404).send("Email not found")
        //compare password
        user.comparePassword(password, (err, match) => { //comparePassword function is written down in user schema
            console.log("Compare password in login error ", err)
            //if password doesn't match
            if(!match || err){
                return res.status(400).send('Wrong password')
            }
            //generate token and send respose to client adter validating the userExist
            

        })
        
    } catch(err){
        console.log('Login Err',err)
        res.status(400).send("Login failed")
    }
}