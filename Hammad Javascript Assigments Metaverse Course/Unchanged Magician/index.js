let magician = ["Apollo Robbins","Criss Angel","Jerry Sadowiz"]
let greatMagician = []

function make_great(arr) {
    for(let i = 0; i < arr.length; i++) {
    greatMagician.push(`Great ${arr[i]}`) ;
}
}


function show_magician(arr) {
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
}
make_great(magician)

show_magician(greatMagician);
show_magician(magician);
