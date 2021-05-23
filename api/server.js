const express =require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send('hello from index rout')
})
app.get('/protected',(req,res)=>{
    res.send('hello from index rout')
})
app.listen(4000,()=>console.log("server oon port 400"))