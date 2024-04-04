//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.

function calculate(){
const number=[1,2,3,4,5];
number.forEach((num) =>{
console.log(num*2);
})
};
calculate();

//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function number(){
  const numberss=[1,2,3,4,5,6];
   a.slice(0,4).forEach((num)=>{
       console.log(num*8)

    })

   };
    number();
        


//given an array of strings use  a function to reverse all the elements in the string in an ascending order and  the specify 
//element in descending order
function change(){
newArra=[];
arra=["latifa","Dorcas","DEsther","umunyana","dodongo","laura","Terry","loice"];

arra.forEach(x =>{
    if(x[0]=="l"||x[0]=="L"){
    let neWordn= x.split("").sort().reverse().join('');
    newArra.push(neWordn);
    }
    else{
        let neWordn=x.split("").sort().join('');
        newArra.push(neWordn);
    }
    
   
 }) 
 console.log(newArra)
}
change()
//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function numbers(){
   const Arrnumber=[4, 6 ,-7, 14,-19,0,25];
   Arrnumber.forEach(num=>{
    if(num>0){
        console.log("positive")
        return "positive"
    }
    else if(num<0){
        console.log("negative")
        return "negative"
    }
    else{console.log("Zero");}

   })
   return Arrnumber
}
 console.log(numbers());
 numbers()
 //Given an array of objects, where each object represents an employee with an id, name, and salary property, 
 //write a function that returns a new array of employee objects sorted by their salary in ascending order.
  function objects(){
    let arrayOfEmpl=[
  {name:"Rachel",id:"ced003",salary:50000},
  {name:"ruth",id:"fed004", salary:200000},
  {name:"Elijah",id:"ef309654",salary:30000}
    ]
console.log(arrayOfEmpl.sort((x,y) => x.salary-y .salary))

  }
  objects()
 
















  
