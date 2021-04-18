//authenticated related code goes to this file
import express from 'express'

const router = express.Router()


router.get('/:message', (req, res)=>{// with express we basically get request and send response
    res.status(200).send(`Here is your message: ${req.params.message}`);
})

export default router