
const array=[];
let users=["hr","tr","Team Leader","Manager"];
function checkUserAccess(users,cb)
{
    var i;
    for(i=0;i<users.length;i++){
        if(users[i]=="hr" || users[i]=="tr"|| users[i]=="Team Leader"|| users[i]=="Manager")
            array.push(`${users[i]}--Success`);
        else
        array.push(`${users[i]}--Failure`);

    }
    cb(array);
}

checkUserAccess(users,callback);

function callback(array){
setTimeout(()=>{
    console.log("====array====",array);
},5000);
}

