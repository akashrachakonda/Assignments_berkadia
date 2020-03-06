const express=require('express');

const app=express();

const mongoose=require('mongoose');

const Bodyparser=require('body-parser');

app.use(Bodyparser.json());

require('dotenv/config');

const url='/students'
const getRoute=require('./routes/routess');

app.use(url,getRoute);


mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },()=>{
    console.log('connected');
}
);


const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening to port ${port}....`));


