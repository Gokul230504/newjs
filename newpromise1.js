function isLocationvalid(loc)
{
    var v="India"
     if(v==loc)
     {
        return true;
     }
     else
     {
        return false;
     }
}
function location(response,errormsg)
{
    return new Promise(function(response,errormsg){
        setTimeout(function(){
            loc="India"
            console.log(loc)
            if(isLocationvalid)
            {
                return response("Location found")
            }
            else{
                return errormsg("Location not found")
            }
        },2000)
})
}

location().then(function(resp){
    console.log(resp)
}).catch(function(fail){
    console.log(fail)
})