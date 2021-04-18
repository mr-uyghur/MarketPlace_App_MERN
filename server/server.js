
import express from 'express'
//code for importing our routes easier
import {readdirSync} from 'fs'

const app = express();
//app."get" is really coming from the express server 
//since express() is stored in app var

//route middleware with express' use method
// with this code we wanna make sure we read everything in the routes to make things easy
// we map through each files in routes folder
//(r arguement is routing file in routes folder). and apply them as middle ware
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)))



app.listen(8000, () => console.log(`Server is running on port 8000`))
