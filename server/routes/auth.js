//authenticated related code goes to this file
import express from 'express'
const router = express.Router()
//controllers
import { register} from '../controllers/auth'


router.post('/register', register)//register user endpoint

module.exports = router;