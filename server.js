const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require('./routes/users.js');
const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.use('/users',userRoutes);
app.get('/',(req,res)=>{
    res.send('HELLO FROM HOMEPAGE')
});

app.listen(PORT,()=>{
    console.log(`App is listening on port ${[PORT]}`);
})