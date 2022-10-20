
function make_album(artistName,albumTitle,tracks) {
    this.artistName = artistName;
    this.albumTitle = albumTitle;
    if(tracks) {
    this.tracks = tracks;
    }
}

console.log(new make_album("Atif Aslam","Jal Pari","Season 2 Cokestudio"))
console.log(new make_album("Rahat Fateh Ali","Afreen"))