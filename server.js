const express = require('express');
const app = express();


require('dotenv').config()

const port = process.env.PORT || 1111
app.use('/',(req,res) => {
    res.json({message : "welcome"})
})


app.listen( port, () =>{
    console.log(`Hello server is : ${port}`)
})