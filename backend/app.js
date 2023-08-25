const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const app = express()
// const {router} = require('./routes/transactions')
const {readdirSync} = require('fs')

require('dotenv').config()

const PORT = process.env.PORT

// database connection



mongoose.connect(process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
}); 



//middleswares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/v1',require('./routes/' + route)))

// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })

const server = ()=>{
    app.listen(PORT, ()=>{
        console.log('listening to port:', PORT)
    })
}

server()