function verifyuser(username,pass)
{
    return new Promise((resolve,reject)=>{
        if(username=='Alien' && pass=='earth')
        resolve('Valid User');
        else
        reject('invalid user');
    });
}

var usr="Alien";
var pwd="earthfghj";


async function call()
{
    try{
    const p= await verifyuser(usr,pwd);
    console.log(p);
    }
    catch(err){
        console.log(err);
    }
}
call();