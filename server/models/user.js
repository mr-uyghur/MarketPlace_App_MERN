//user schema
//models is tables in the database.
import mongoose from 'mongoose' 
import bcrypt from 'bcrypt'

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

/* -----------------------------------------------------
while creating user, hash user's password for encryption.
hashing password under 2 conditions:
* when creating a new user and when existing user updates password
use 'pre' middleware to handle these requirement
this middle ware will be used each time a new user is created or password update
---------------------------------------------------------*/

//pre middleware
userSchema.pre('save',function(next){
    let user = this // user var will refer to userSchema itself
    //has Password with Bcrypt
    if(user.isModified('password')){
        return bcrypt.hash(user.password,12,function(err, hash){
            if(err){
                console.log('Bcrypt HAS ERROR: ',err)
                return next(err)
            }
            //if no error then hash user's password
            user.password = hash
            return next();
        })
    } else {
        return next()
    }
})

userSchema.methods.comparePassword = function (password, next){
     // use bcrypt compare method to compare incoming data with hashed password
    bcrypt.compare(password,this.password,function(err, match){
        if(err){
            console.log('compare password error: ',err)
            return next(err,false)
        }
        //if no err, we get null 
        console.log("MATCH PASSWORD",match)
        return next(null, match)
    })
}

export default mongoose.model('User',userSchema) // export user schema as "User"