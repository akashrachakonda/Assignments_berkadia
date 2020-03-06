const express=require('express');
const schema=require('../schema/schema');

const route=express.Router();
route.get('/', async (req,res)=>{

    try{
        const post=await schema.find();
        res.json(post);
        }
        catch(err)
        {
            res.json({message:err});
        }
        
});

route.post('/', async (req,res)=>{
    const data=new schema({
        id:req.body.id,
        name:req.body.name,
        password:req.body.password,
        profession:req.body.profession
    });

try{
const savedpost=await data.save();
res.json(savedpost);
}
catch(err)
{
    res.json({message:err});
}


});

route.delete('/postId',async (req,res)=>{
try{
    const removed=await data.remove({_id:req.params.postId});
    res.json(removed);
}
catch(err){
res.json({message:err});
}
});

route.put('/postId',async (req,res)=>{
    try{
        const update=await data.updateOne({_id:req.params.postId},
           {$set:{title:req.body.name}} );
        res.json(update);
    }
    catch(err){
    res.json({message:err});
    }
    });


module.exports=route;