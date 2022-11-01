const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = 8000
const mysql = require('mysql2')
const app = express()
// ---------------------------------------------------------------------------//

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))

// ---------------------------------------------------------------------------//
//Creating a connection with the mysql database


const db = mysql.createPool({

    host:'localhost',
    user:'root',
    password:'neymarjr11',
    database:'clients'
})

//-----------------------------------------------------------------------

app.get('/' , (req , res)=>{

    // const sqlinsert = "INSERT INTO users (name , email , contact) VALUES ('mohamamd' , 'mohammad@gmail.com',000000)";
    // db.query(sqlinsert , (error , result) => {

    //     console.log('error ', error);
    //     console.log('result', result);
    //     res.send('hello express')
    // })

})



app.get('/api/users' , (req , res )=> {

   const sqlget = 'SELECT * FROM users'
   db.query(sqlget , (error , result)=>{

    console.log('error', error);
    res.send(result)
   })
})



app.listen(PORT , ()=> console.log(`server running at : http://localhost:${PORT}`))
