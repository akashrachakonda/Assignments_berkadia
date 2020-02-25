

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

function callback(data){
    console.log(data);
  }


var usr="Rohith";

var p=getRoles(usr,callback);

