const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let port = 9000;

app.use(bodyParser.json());
app.get('/*',(req, res)=>{
})
app.listen(port, (err)=>{
    if(err)return console.log(err);
    console.log(`is live on port : ${port}`);
})