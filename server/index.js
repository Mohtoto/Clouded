const express = require('express')
const cors = require('cors')
const Pool = require('pg').Pool
// const client = require('./connection')
const bodyParser = require('body-parser')
const PORT = 8000
// ---------------------------------------------------------------------------//
const app = express()
app.use(cors())
app.use(bodyParser.json())
// ---------------------------------------------------------------------------//






app.get('/' , (req , res )=> {

    // app.status(200).send('done')
})

app.listen(PORT , ()=> console.log(`server running at : http://localhost:${PORT}`))
