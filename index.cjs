const Database = require('./database');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const IdentityRoute = require('./routers/identityRouter');
const pepeRoute = require('./routers/pepeRouter');
app.use(cors({origin : ['http://localhost:5173','https://andikapepe.netlify.app']}));

app.use(express.json());

app.use('/identity',IdentityRoute);
app.use('/pepe',pepeRoute);


mongoose.connect(Database)
    .then(()=>{
        console.log("database connected");
        app.listen(3001,()=>{
            console.log('3k running')
        })
    })
    .catch((error)=>{
        console.log("connection unable",error)
    });