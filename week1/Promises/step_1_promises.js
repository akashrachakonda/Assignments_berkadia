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
var pwd="earth";

var p=verifyuser(usr,pwd);

p.then(value=>{
    console.log(value);
}).catch(err=>{
    console.log(err);
});