
import express from 'express'
const morgan = require("morgan")
//code for importing our routes easier
import {readdirSync} from 'fs'
require('dotenv').config() //execude config() function of dotenv

const app = express();
//app."get" is really coming from the express server 
//since express() is stored in app var
//morgan middleware
app.use(morgan("dev")) // we want to run morgan in development mode
//route middleware with express' use method
// with this code we wanna make sure we read everything in the routes to make things easy
// we map through each files in routes folder
//(r arguement is routing file in routes folder). and apply them as middle ware
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)))


const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server is running on port ${port}`))
