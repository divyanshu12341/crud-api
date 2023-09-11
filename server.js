const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send('HELLO FROM HOMEPAGE')
});

app.listen(PORT,()=>{
    console.log(`App is listening on port ${[PORT]}`);
})