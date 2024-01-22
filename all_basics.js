var a ="Im gokul raj"
var b =10;
console.log(a);
console.log(b);
{
    let num =20;
    console.log(num)
}
//console.log(num)
const x =22;
{
    const x =90;
    console.log(x);
    {
        const x=45;
        console.log(x);
    }
}
console.log(x);
console.log(323);
console.log(0b11);
const str="Deva";
console.log(str); 
let student = true;
console.log(student);
let val = null;
console.log(val);
let id =Symbol("id");
console.log(id);
let bigNumber = 12678900001909182983728700000909989878675655443n;
console.log(bigNumber);
const mySymbol = Symbol();
const myObject={
    [mySymbol]:'Hello, Symbol',
};
console.log(myObject[mySymbol]);
const mySymbolWithDescription=Symbol('This is symbol with description');
console.log(mySymbolWithDescription);
let person={
    name:'Gokul',age:20,
};
console.log(person.name);
console.log(person.age);
function triangle(arr,n){
    let count=0;
    for(let i=0;i<n;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            for(let k=j+1;k<n;k++)
            {
                if(
                arr[i]+arr[j]>arr[k]
                && arr[j]+arr[k]>arr[i]&&
                arr[k]+arr[i]>arr[j])
                {
                    count++;
                }
            }
        }
    }return count;
}
const arr=[2,3,4,5,8,9];
const length=arr.length;
console.log(triangle(arr,length));
