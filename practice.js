 function age(){
    let a = Number(prompt("Enter your age"));
    if(a>0 && a>=18){
        alert("You CAN Drive");
    }
    // else if(isNaN(age))
    else if(a<0){
        console.error("Invalid Input");
        // alert("Invalid Input");
    }
    else{
        alert("You CANNOT Drive");
    }
}
do{
age();
}
while (confirm("Do you want to see the prompt again?"));


function num(){
    let n = Number(prompt("Enter A number"));
    if(n>4)
    {
        window.location.href = "https://www.google.com/";
// Get and display the current URL
const currentUrl = window.location.href;
console.log(currentUrl);
    }
    else{
        alert("GET LOST");
    }
}

num();


function bColor(){
    let color = prompt("Enter the color you desire");
    document.querySelector("html").style.backgroundColor = `${color}`
}

bColor();
