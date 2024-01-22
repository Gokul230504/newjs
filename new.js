//set and maps
setExample = new Set(["1","2","3","0"])
set1=new Set("22333","89")
//adding elements to set, it wont allow duplicate elements
setExample.add(10)
setExample.add(100)
setExample.add("1")
setExample.add("Gokul")
for (const key in setExample) {
    if (Object.hasOwnProperty.call(setExample, key)) {
        const element = setExample[key];
        console.log(setExample[key]);
    }
}//no output in for in loop 
for (const iterator of setExample) {
    console.log(iterator)
}//key is directly accessed
//map
newmap = new Map([["id","21ecr065"],["id1","21ECR066"]])
console.log(newmap)
//adding elements to map
NEWMAP1 = new Map([[1,678],[5,789]])
//console.log(NEWMAP1)
for (const key in NEWMAP1) {
    if (Object.hasOwnProperty.call(NEWMAP1, key)) {
        const element = NEWMAP1[key];
        console.log(element);
    }
}
for (const iterator of NEWMAP1) {
    console.log(iterator);
}
console.log(NEWMAP1.has(5));
set1.delete("3")
console.log(set1)
NEWMAP1.delete(1)
console.log(NEWMAP1)
function add(num1,num2)
{
    let num=num1+num2;
    return num;
}
num1 = 1;
num2 = 2;
console.log("The sum of two numbers is",add(num1,num2))
function num()
{
    let number=5;
    return number;
}
console.log(num());
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
//hoisting
//variable hoisiting
console.log(a1)
var a1=10//undefined
//refernce error
/*console.log(a2)
let a2=10
//Functional hoisiting*/
newfun(1,2)
function newfun(a3,b3)
{
    return a3+b3;
}


