const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT;
const mysql = require("mysql2");
const { json } = require("express");
const app = express();

const path = require('path')
// ---------------------------------------------------------------------------//




app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.resolve(__dirname, "../dist")));



// ---------------------------------------------------------------------------//
//Creating a connection with the mysql database

const db = mysql.createConnection('mysql://jwpi1ehw9h8sddnf:c44v1ey4dc3tep9a@phtfaw4p6a970uc0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/watucwoctlm8h0qi')
db.connect()



//-----------------------------------------------------------------------

// app.get('/addclient' , (req , res)=>{

//     const sqlinsert = "INSERT INTO users (name , email , contact , password) VALUES ('jamal' , 'shegglabo@gmail.com',1230192813 , 123123)";
//     db.query(sqlinsert , (error , result) => {

//         console.log('error ', error);
//         console.log('result', result);
//         res.send('hello express')
//     })

// })

app.get("/api/get", (req, res) => {
  const sqlget = "SELECT * FROM users";
  db.query(sqlget, (error, result) => {
    console.log("error", error);
    res.send(result);
  });
});

app.post("/api/post", (req, res) => {
  const { name, email, contact , password } = req.body;
  const sqlinsert =
    "INSERT INTO users (name , email , contact , password) VALUES ( ? , ? , ? , ? )";
  db.query(sqlinsert, [name, email, contact , password], (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

app.delete("/api/remove/:id", (req, res) => {
  const { id } = req.params;

  const SqlRemove = "DELETE FROM users WHERE id=?";

  db.query(SqlRemove, id, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

app.put("/api/update/:id", (req, res) => {
  const { id } = req.params;

  const { name, email, contact , password } = req.body;

  const sqlUpdate =
    "UPDATE users SET name= ? ,email =? ,  contact = ? , password=? WHERE id =? ";

  db.query(sqlUpdate, [name, email, contact, password ,id], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.get("/api/get/:id", (req, res) => {
  const { id } = req.params;

  const sqlget = "SELECT * FROM users WHERE id=?";

  db.query(sqlget, id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//------------------------------------------Register api ---------------------------------------------------//


// app.get('/get/Register', (req,res)=>{

//   const getRegsiter = 'SELECT * FROM register'  
//   db.query(getRegsiter , (err, result)=>{

//     console.log(err);
//     res.send(result)
//   })
// })

// app.post("/login", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   const sqlreg = "SELECT * FROM register WHERE email = ? AND password = ?";
//   db.query(sqlreg, [email, password], (error, result) => {
//     if (error) {
//       console.log(error);
//     }

//     if (result.length > 0) {
//       res.send(result);
//     } else {
//       res.send({ message: "Wrong combination" });
//     }
//   });
// });

// app.post("/Register", (req, res) => {
//   const { email, password } = req.body;
//   const SqlRegPost = "INSERT INTO register ( email , password) VALUES ( ? , ?)";
//   db.query(SqlRegPost, [email, password], (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// });


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});



//------------------------------------------ Server running ---------------------------------------------------//





app.listen(port, () =>
  console.log(`server running at : http://localhost:${port}`)
);

process.on('exit' , ()=> {

  db.end()

})

