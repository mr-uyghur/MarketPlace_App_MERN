
import express from 'express'
import router from './routes/auth'
//code for importing our routes easier
import fs from 'fs'

const app = express();
//app."get" is really coming from the express server 
//since express() is stored in app var

//route middleware with express' use method
// with this code we wanna make sure we read everything in the routes
// we map through each files in routes folder
//(r arguement is routing file in routes folder). and apply them as middle ware
fs.readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)))



app.listen(8000, () => console.log(`Server is running on port 8000`))
