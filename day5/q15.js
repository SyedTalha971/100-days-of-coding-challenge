var guest = ["Asharib Ali", "Hamzah Syed", "Zia Khan", "Ameen Alam"];
// Faculty who's not join
var unableToAttend = "Zia Khan";
console.log("\n".concat(unableToAttend, " can't make it to iftari.\n"));
//Replace New Guest
var newGuest = "Qasim";
guest[guest.indexOf(unableToAttend)] = newGuest;
guest.forEach(function (guest) {
    console.log("\t\nHey Sir ".concat(guest, ", Do you want join me at Shaheen Shanwari for iftari? \t\n if yes let me know i'll arrange for you but in american system.\t\n  Hehehhehehe\t\n"));
});
