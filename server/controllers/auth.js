export const showMessage = (req, res)=>{// with express we basically get request and send response
    res.status(200).send(`Here is your message: ${req.params.message}`);
}