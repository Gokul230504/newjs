//scope- globl,local,block
//global scope
Sum=0
while(Sum<10)
{
   Sum++;
}
console.log(Sum);
//local scope
for(let i=0;i<10;i++)
{
    i++;
    console.log(i);//locally declared so here it will print
}
//console.log(i);//wont print i;
//block scope
for(var i=0;i<10;i++)
{
    i++;
    //console.log(i);//locally declared so here it will print
}
console.log(i);
var a=10
{
    let b=5
    let a=5
    console.log(b)
    console.log(a)
}
/*console.log(a)
console.log(b)*///reference error
//let changes locally if not let then value will be changed
