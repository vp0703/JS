console.log("Hello, World!");
alert("Welcome to the web page!");
function sum(a, b){
    return a+b;
}
sum(10, 20);
c= prompt("enter first number:");
d= prompt("enter second number:");    
console.log("sum is: " + sum(Number(c), Number(d)));



// Q1. Product
const product = {
    name: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 270,
};

console.log(product);



// Q2. Userid
const profile ={
    usernm: "@glowandmagicmanifest",
    isFollow: false,
    followers: 284,
    following: 2,
};

console.log(profile);



// Q3. prompt
  let a= prompt("Enter a number:");
  if(a%5===0)
  {
    console.log(a, "is Multiple of 5");
  }
  else{
    console.log(a, "is NOT a Multiple of 5");
  }



//   Q4. grades
let score= prompt("Enter your score to check the grades:");
if (score>=80 && score<=100)
{
    console.log("A");
}
else if(score>=70 && score<=89)
{
    console.log("B");
}
else if(score>=60 && score<=69)
{
    console.log("C");
}
else if(score>=50 && score<=59)
{
    console.log("D");
}
else if(score>=0 && score<=49)
{
    console.log("F");
}
else
{
    console.log("Invalid Number");
}



// Q5. loops
for (let num=1; num<=100; num++)
{
    if (num%2===0)
    {
        console.log(num)
    }
}



// Q6. Generate username 
nm= prompt("Enter username");
console.log("Username Entered:", nm);
nml= nm.toLowerCase().trim().replace(/\s+/g, "");
usernm = `@${nml}`+nml.length;
console.log("Generated Username:", usernm);



// Q7. avg
let marks = [85, 97, 44, 37, 76, 60];
let sum=0;
for (let val of marks){
    sum+=val;
}
let avg = sum / marks.length;
console.log("Average marks of class =", avg)



// Q8. Array with offer
let price = [250, 645, 300, 900, 50];
for (let i=0; i<price.length; i++)
{
    console.log(price[i]);
    off=price[i]/10;
    price[i]-=off;
}
console.log("Price after 10% off", price);



// Q9. Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end
let comp = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
//b:
comp.splice(2, 1, "Ola");
console.log(comp);
//a:
comp.shift();
console.log(comp);
// c:
comp.push("Amazon");
console.log(comp)



// Q10. Vowels in string
function vowels(str)
{
    let count=0;
    for(let i of str)
    {
    if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u")
    {
        count++;
        
    }
    }
    console.log(count);
}



// Q11. Vowels in string using arrow function
const vowels = (str) =>
{
    let count = 0;
    for(let i of str)
    {
    if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u")
    {
        count++;
        
    }
    }
    console.log(count);
};