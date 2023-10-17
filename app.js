const max = prompt("enter the maximum number") //user will enter the maximum number that will be stored in the constant variable max
const random = Math.floor(Math.random()*max)+1
console.log(random);
let guess = prompt("guess the number")
while(true){
    if(guess =="quit");{
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("you are right! Congrats!! random number was",random);
        break;
    }else if(guess<random){
        guess = prompt("hint:your guess was too small.Please try again.")
    }else{
        guess = prompt("hint:your guess was too large.Please try again.")
    }

}
