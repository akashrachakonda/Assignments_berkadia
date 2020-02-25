

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

var usr="Rohith";

async function call()
{
    try{
    const p= await getRoles(usr);
    console.log(p);
    }
    catch(err){
        console.log(err);
    }
}
call();