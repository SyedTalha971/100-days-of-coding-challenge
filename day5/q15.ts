let guest : string [] = ["Asharib Ali" , "Hamzah Syed" , "Zia Khan" , "Ameen Alam"]
// Faculty who's not join
let unableToAttend = "Zia Khan" ;
console.log(`\n${unableToAttend} can't make it to iftari.\n`);
//Replace New Guest
let newGuest = "Qasim" ;
guest[guest.indexOf(unableToAttend)]=newGuest

guest.forEach(guest => {
    console.log(`\t\nHey Sir ${guest}, Do you want join me at Shaheen Shanwari for iftari? \t\n if yes let me know i'll arrange for you but in american system.\t\n  Hehehhehehe\t\n`)
}) ;