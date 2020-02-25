

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

var p=getRoles(usr);

p.then(value=>{
    console.log(value);
}).catch(err=>{
    console.log(err);
});