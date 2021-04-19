//API controller
//information send from the frontend with post request
// is recieved as request body on our backend
//request body is recieved as JSON data
export const showMessage = (req, res)=>{// with express we basically get request and send response
    res.status(200).send(`Here is your message: ${req.params.message}`);
}


// controller method to handle user register
export const register = async (req, res) =>{
    //user data information send from the front end can be accessed with req body
    console.log(req.body)
    //create user schema with user properties
    // and saved properties in the database
}