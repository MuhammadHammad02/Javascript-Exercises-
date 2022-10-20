/*Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.*/


/*• Start with your program from Exercise 14. Add a print statement at the end of your program stating
the name of the guest who can’t make it.*/



var guestList = ['Wali','Arshad','Zeshan'];

console.log("Hello", guestList[0],"Please come to dinner.")

console.log("Hello", guestList[1],"Please come to dinner.")

console.log("Hello", guestList[2],"Please come to dinner.")

console.log("\nHello", guestList[2],"can't make it to dinner.")


/* Modify list, replacing the name of the guest who can’t make it with the name of the new
person you are inviting.*/

guestList[2] = 'Sohail';

console.log("\nHello", guestList[0],"Please come to dinner.")

console.log("Hello", guestList[1],"Please come to dinner.")

console.log("Hello", guestList[2],"Please come to dinner.")


/*More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner.*/

// we got a bigger table so invite more guest.
 

console.log("\nWe got a bigger table!");

// • Add one new guest to the beginning of your array.

guestList.unshift("Hizbullah");

//Add one new guest to the middle of your array

guestList.splice(2,0, "Rizwan" );

//add one new guest to the end of your list

guestList.push("Zeeshan");

console.log("\nHello", guestList[0],"Please come to dinner.")

console.log("Hello", guestList[1],"Please come to dinner.")

console.log("Hello", guestList[2],"Please come to dinner.")

console.log("Hello", guestList[3],"Please come to dinner.")

console.log("Hello", guestList[4],"Please come to dinner.")

console.log("Hello", guestList[5],"Please come to dinner.")


/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.*/

console.log("\nSorry, we can invite only two people for dinner");

// Remove guestlist by using pop function

var removeGuestList = guestList.pop()

console.log("\nSorry" + " " +removeGuestList+ " " +"you are not invite for dinner");

var removeGuestList = guestList.pop()

console.log("Sorry" + " " +removeGuestList+ " " +"you are not invite for dinner");

var removeGuestList = guestList.pop()

console.log("Sorry" + " " +removeGuestList+ " " +"you are not invite for dinner");

var removeGuestList = guestList.pop()

console.log("Sorry" + " " +removeGuestList+ " " +"you are not invite for dinner");

// inviting remaining two member.

console.log("\nHello," + " " +guestList[0]+ " " +"you are invite for dinner");

console.log("Hello," + " " +guestList[1]+ " " +"you are invite for dinner");

// now remove list after the end of program by using unshift function.

guestList.shift()

console.log(guestList);

guestList.shift()

console.log(guestList);