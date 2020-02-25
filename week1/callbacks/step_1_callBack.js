function verifyUser(uname,upwd,cb)
{
    var res="";
            if(uname == 'Alien' && upwd == 'earth')
            {
                res= uname;                
            }
            else{
                res="User Does  not exist...";
            }
cb(res);
}
function callback(data)
{
    console.log(data);
}

var usr="Alien";
var pwd="earth";

verifyUser(usr,pwd,callback);

