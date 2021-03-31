

let score = 0;

let userName = prompt("what\'s your name")
// Q1
function AgeFun(){
    alert("Welcome to my site, "+userName+'\n' +"I want to ask you five questions about me. Please answer these questions with yes/y or no/n .without space after that")
    let age = prompt("my age 22 ?").toLowerCase()

    if (age=='yes'||age=='y') {
        alert("your answer is correct  = " + age.toLowerCase()+" my age =22")


        console.log("your answer is correct  = " + age.toLowerCase()+" my age =22");
        score++


    } 
    else if (age == 'no' || age == 'n') {
        alert("your answer is wrong   = " + age.toLowerCase()+" my age=22" )

        console.log("your answer is wrong   = " + age.toLowerCase()+" my age=22" );

    } 
    else{
        alert("answer with yes/y or no/n")
    }
}

AgeFun();

// Q2
    function favoriteFood(){
    let favoriteDish = prompt("my favorite dish is mansaf ?").toLowerCase();

    if (favoriteDish == 'yes' || favoriteDish == 'y') {

        alert("your answer is wrong   " + favoriteDish.toLowerCase()+" my favorite Dish=dawali ")

        console.log("your answer is wrong   " + favoriteDish.toLowerCase()+" my favorite Dish=dawali ");

    }


    else if (favoriteDish== 'no' || favoriteDish == 'n') {
    alert("your answer is correct  = " + favoriteDish.toLowerCase()+" my favorite Dish=dawali ")

        console.log("your answer is correct  = " + favoriteDish.toLowerCase()+" my favorite Dish=dawali ");
        score++


    }
    else{
        alert("answer with yes/y or no/n")
    }
}

favoriteFood()
// Q3
function favoriteColor(){
    let color = prompt("my favorite color is red  ?").toLowerCase();
    if (color == 'no' || color == 'n') {
        alert("your answer is correct  = " + color.toLowerCase()+" my favorite color is black ")

        console.log("your answer is correct  = " + color.toLowerCase()+" my favorite color is black ");
        score++

    }
    else  if (color == 'yes' || color == 'y'){
        alert("your answer is wrong   " + color.toLowerCase()+ "  my favorite color is black ")
        console.log("your answer is wrong   " + color.toLowerCase()+ "  my favorite color is black ");

    }
    else{
        alert("answer with yes/y or no/n")
    }
}
favoriteColor()
// Q4
function allergicFun(){
    
    let allergic = prompt("Do I have a spring allergy?").toLowerCase();

    if (allergic == 'yes' || allergic == 'y') {
        alert("your answer is correct  = " + allergic.toLowerCase()+" i have allergic ")

        console.log("your answer is correct  = " + allergic.toLowerCase()+" i have allergic ");
        score++

    }

    else if(allergic == 'no'  || allergic == 'n'){

        alert("your answer is wrong   = " + allergic.toLowerCase()+" i have allergic ")
        console.log("your answer is wrong   = " + allergic.toLowerCase()+" i have allergic ");}

        else{
            alert("answer with yes/y or no/n")
        }
}
allergicFun()
// Q5 
function homeFun (){
    let home = prompt("Do I like staying home?").toLowerCase();


    if(home=='yes' ||home=='y'){
        alert("your answer is correct  = " + home.toLowerCase()+"I like to stay at home ")

        console.log("your answer is correct  = " + home.toLowerCase()+"I like to stay at home ");
        score++



        
    } 
    else if(home=='no'||home=='n'){
        alert("your answer is wrong  = " + home.toLowerCase()+" I like to stay at home")

        console.log("your answer is wrong  = " + home.toLowerCase()+" I like to stay at home");

    }
    else{
        alert("answer with yes/y or no/n")
    }
}
homeFun ()
// Q6
alert(userName + " ,We will play a game now. I want you to guess my favorite number by way of entering a number from 0 to 10. You only have four attempts. Start now");

for (let i = 0; i < 4; i++) {
    
let number = prompt("enter my favorite number from 0 to 10")
if (number == 7) {
    alert("Wow, this is my favorite number " + number)
    score++;
    break;
}
    
    
    else if (number > 7) {
        alert("The correct answer is less than " + number)
        

    }
     else if (number < 7) {
        alert("The correct answer  bigger is  than " + number)
       
    }

     

}
alert(" my favorite number  7  thx For your attempt")
let course = ["c++", "network", "data mining", "database", " oracle", "data strcure", "object", "file strcure", "GUI"]

alert("The last question about me ")
let attempts = 6
for (let j = 0; j < attempts; j++) {
    let course2 = prompt("Choose the favorite course  you have 6 attempts   ");
    for (let i = 0; i < course.length; i++) {
        //console.log(course[i]);
        if (course2 === course[i]) {
            score++
            console.log(course[i]);
            alert("the correct here  the answer " + course)
            j=6
            break;
        }
    }


    if (j == 5) {
        alert("sorry no more tries " + course)
    } else if (j < 6) {
        alert('this is wrong ')

    }

}
alert("Thank you for trying "+'\n'+"Your score is "+score+ "/ 7")





