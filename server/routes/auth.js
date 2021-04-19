//authenticated related code goes to this file
import express from 'express'
const router = express.Router()
//controllers
import {showMessage, register} from '../controllers/auth'


router.get('/:message', showMessage)

router.post('/register', register)//register user endpoint

module.exports = router;