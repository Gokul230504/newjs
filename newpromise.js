function upload(message)
{
    return new Promise((success,failure)=>{
        console.log(message);
        const timeforupload = Math.random()<0.5;
        setTimeout(()=>{
            if(timeforupload)
            {
                success("File uploaded successfully");
            }
            else
            {
                failure("File upload failed");
            }
        },2000);
    });
}
upload("Upload button clicked succesfully").then((finemessage)=>{
    console.log(finemessage);
})
.catch((notfine)=>{
    console.log(notfine);
})