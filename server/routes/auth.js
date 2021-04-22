//authenticated related code goes to this file
import express from 'express'
const router = express.Router()
//controllers
import { register,login} from '../controllers/auth' //API controllers


router.post('/register', register)//register user endpoint

router.post('/login', login)

module.exports = router;