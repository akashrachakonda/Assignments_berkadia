
function verifyuser(username,pass)
{
    return new Promise((resolve,reject)=>{
        if(username=='Alien' && pass=='earth')
        resolve(username);
        else
        reject('invalid user');
    });
}

function getRoles(username)
{
    return new Promise((resolve,reject)=>{
        switch(username)
        {
            case 'Rohith':resolve("HR");
                            break;
            case 'Swapnil':resolve("Admin");
                            break;  
            case 'Rashik':resolve("Team Leader");
                            break;
            case 'Santhu':resolve("Technical Head");
                            break;
            case 'Prasanna':resolve("IT Topper");
                            break;
            case 'Alien':resolve("Akash Rachakonda...");
                        break;
            default:reject("Unknown User");

        }
    });
}


var usr="Alien";
var pwd="earth";

var p=verifyuser(usr,pwd);

p.then(value=>{
    console.log(value);
    return getRoles(value);
}).then(step2=>{
console.log(step2);
}
).catch(err=>{
    console.log(err);
});

const array=[];
let users=["hr","tr","Team Leader","Manager"];
function checkUserAccess(users)
{
    return users.map(user=>
        {
            return new Promise((reslove,reject)=>
            {
                if(user=="hr" || user=="tr"|| user=="Team Leader"|| user=="Manager")
                reslove(user);
                reject(user);
            });
        });
}

checkUserAccess(users).map(userPromise=>{
    userPromise
    .then(result=>{
        array.push(`${result}--success`);
    })
    .catch(err=>{
        array.push(`${err}--fail`);
    });
});

setTimeout(()=>{
    console.log("====array====",array);
},5000);
