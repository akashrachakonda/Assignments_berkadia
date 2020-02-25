a(10,function(resulta,err){
        if(!err)
        {
            console.log(resulta);
            b(resulta,function(resultb,err){
                if(!err)
                {
                    console.log(resultb);
                    c(resultb,function(resultc,err){
                        if(!err)
                        {
                            console.log(resultc);
                        }   
                    })
                }
            })
        }
    })

    function a(value,callback){
        callback(value+10,false);
    }    
    function b(value,callback){
        callback(value+10,false);
    }    
    function c(value,callback){
        callback(value+10,false);
    }    
