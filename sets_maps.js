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






