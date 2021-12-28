const express = require('express');
const app = express();


app.get('/*',(req, res)=>{
    res.send('hi');
})
app.listen(9000, (err)=>{
    if(err)return console.log(err);
    console.log('is on');
})