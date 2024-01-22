//CALLBACK
function mine(message,Callback)
{
    console.log(message);
    setTimeout(function()
    {
     Callback();
    },5000)
}
function yours()
{
    console.log("You are mine")
}

mine("I was waiting for you \n dont leave me")