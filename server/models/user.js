//user schema
//models is tables in the database.
import models from 'mongoose' 
const {Schema} = mongoose

const userSchema = new Schema({
    name : {type:String, trim:true, require:'Name is required'},
    email : {type:String, trim:true, require:'Email is required', unique:true},// with unique:true, no 2 users can have the same email, their email must be unique
    password : {type:String, require:'Password is required',min:6, max:64},

    strip_account_id : '',
    strip_seller : {}, 
    strip_sessions : {},
},
{timestamps:true} 
)

export default mongoose.model('User',userSchema) // export user schema as "User"