
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