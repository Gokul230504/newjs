function submitform(message,database)
{
    setTimeout(function(){
        console.log(message)
        database();
    },10000)
}
function db()
{
    console.log("form submitted successfully")
}
submitform("Form submit button clicked",db);
