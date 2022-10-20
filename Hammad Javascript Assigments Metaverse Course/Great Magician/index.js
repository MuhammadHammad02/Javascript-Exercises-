

let magician =["Apollo Robbins","Criss Angel","Jerry Sadowiz"]

function make_great(arr) {
    for(let i = 0; i < arr.length; i++) {
        magician[i] = `great ${arr[i]}`;
    }
    return magician;
}

function show_magician(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

show_magician(make_great(magician));