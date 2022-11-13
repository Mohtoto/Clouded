const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = 8000
const mysql = require('mysql2')
const { json } = require('express')
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

// app.get('/' , (req , res)=>{

//     const sqlinsert = "INSERT INTO users (name , email , contact) VALUES ('jamal' , 'shegglabo@gmail.com',1230192813)";
//     db.query(sqlinsert , (error , result) => {

//         console.log('error ', error);
//         console.log('result', result);
//         res.send('hello express')
//     })

// })



app.get('/users' , (req , res )=> {

   const sqlget = 'SELECT * FROM users'
   db.query(sqlget , (error , result)=>{

    console.log('error', error);
    res.send(result)
   })
})

app.post("/users" , (req, res)=> {

    const { name, email , contact }= req.body
    const sqlinsert = 'INSERT INTO users (name , email , contact) VALUES ( ? , ? , ? )'
    db.query(sqlinsert , [name , email , contact] , (error , result)=> {

        if(error){

            console.log(error);
        }
        else{

            console.log('updated success')
        }
        
    })




  
})  


// app.put('/users/:id' , (req, res)=> {

//     const sqlput = 'UPDATE '
// })


app.delete('/users/:id', (req,res)=> {

    const {id } = req.params
    const sqlremove = "DELETE FROM contact_db WHERE id= ?";
    db.query( sqlremove , id, (error , result)=> {
  
      if(error){
  
        console.log(error);
      }
    })
  })


  app.put('/users/:id' , (req,res)=>{

    const { id } = req.params
    const { name , email , contact } = req.body

    const sqlUpdate = 'UPDATE users SET name= ? , email = ? , contact =? WHERE id = ? '

    db.query(sqlUpdate , [name, email , contact ,id]  , (err ,result)=> {

        if(err){
            console.log(err);

        }

        else {

            req.send(result)
        }
    })
  })
  




app.listen(PORT , ()=> console.log(`server running at : http://localhost:${PORT}`))
