function verifyUser(uname,upwd,cb)
{
    var res="";
            if(uname == 'Alien' && upwd == 'earth')
            {
               res=  uname;                
            }
            else{
                res= "User Does  not exist...";
            }
           getRoles(res,cb) 
}

function getRoles(username,cb)
{
    var role="";
        switch(username)
        {
            case 'Rohith':role="Hr";
                            break;
            case 'Swapnil':role="Admin";
                            break;  
            case 'Rashik':role="Team Lead";
                            break;
            case 'Santhu':role="Technical Head";
                            break;
            case 'Prasanna':role="CEO";
                            break;
            case 'Alien':role="Manager";;
                        break;
            default:role="Unknow User";
            break;

        }
cb(role);
}




function cb(data)
{
    console.log(data);
}


var usr="Alien";
var pwd="earth";
verifyUser(usr,pwd,cb);
//console.log(p);





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


