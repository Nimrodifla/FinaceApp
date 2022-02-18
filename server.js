const express = require('express');
const app = express();

app.listen(process.env.PORT || 80);

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/v3.html');
});