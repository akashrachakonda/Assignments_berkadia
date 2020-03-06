const mongoose=require('mongoose');

const postSchema=mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profession:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Posts',postSchema);