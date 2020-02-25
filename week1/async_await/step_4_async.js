
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

async function call()
{
    try{
    const p= await verifyuser(usr,pwd);
    console.log(p);
    const q=await getRoles(p);
    console.log(q);
    }
    catch(err){
        console.log(err);
    }
}

call();




