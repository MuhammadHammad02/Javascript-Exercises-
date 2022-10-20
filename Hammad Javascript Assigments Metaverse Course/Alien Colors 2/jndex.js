
/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/


// earned 5 point

let alienColor = "green";



if(alienColor === 'green') {

    console.log("you have earned 5 points") 

} else if(alienColor === 'yellow') {

    console.log("you have earned 10 points")

} else {

    console.log("you have not earned any points")

}
    

// earned 10 points.


alienColor = "yellow";



if(alienColor === 'green') {

    console.log("you have earned 5 points") 

} else if(alienColor === 'yellow') {

    console.log("you have earned 10 points")

} else {

    console.log("you have not earned any points")

}
