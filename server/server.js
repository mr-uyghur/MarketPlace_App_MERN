const express = require('express');

const app = express();
//app."get" is really coming from the express server 
//since express() is stored in app var
app.get('/api/:message', (req, res)=>{// with express we basically get request and send response
    res.status(200).send(`Here is your message: ${req.params.message}`);
})

app.listen(8000, () => console.log(`Server is running on port 8000`))
