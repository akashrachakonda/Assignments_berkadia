const Joi=require('joi');
const express=require('express');
const app=express();

//const util=require('util');

const fs=require('fs');

app.use(express.json());

const readMe=fs.readFileSync('courses.json','utf-8');
//console.log(typeof(read));
//console.log(typeof(JSON.parse(read)));

const path='/api/info/';

app.get(path,(req,res)=>{
    
    res.send(readMe);
    fs.writeFileSync('./courses.json',readMe);
    
});



app.post(path,(req,res)=>{

   //const result=validateCourse(req.body);
   const {error}=validateCourse(req.body);
    if(error)
    {
        res.status(400).send(error.details[0].message);
        return;
    }
const data={
    id:req.body.id,
    name:req.body.name,
    password:req.body.password,
    profession:req.body.profession
};

var par=JSON.parse(readMe);
par.push(data);
fs.writeFileSync('./courses.json',JSON.stringify(par));
res.send(par);
});

app.put(path+':id',(req,res)=>{


    let p=JSON.parse(readMe);
    var a=p.map((data)=>{
    if(data.id==req.params.id)
    {
        data.name=req.body.name;
        data.password=req.body.password;
        data.profession=req.body.profession;   
    }
    return data;
    });


fs.writeFileSync('./courses.json',JSON.stringify(a));
res.send(a);

});


app.delete(path+':id',(req,res)=>{

    let p=JSON.parse(readMe);

    const id=p.find(c=> c.id==parseInt(req.params.id));
    if(!id) res.status(404).send("The requested page not found");
8
    const index=p.indexOf(id);
    p.splice(index,1);
    
fs.writeFileSync('./courses.json',JSON.stringify(p));
res.send(p);

});





function validateCourse(data){
    const schema={
        id:Joi.number().min(1).required(),
        name:Joi.string().min(3).required(),
        password:Joi.string().min(5).optional(),
        profession:Joi.string().min(5).optional()
      };
  
      return Joi.validate(data,schema);
}


const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening to port ${port}....`));