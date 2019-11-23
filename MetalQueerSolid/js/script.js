// var pageNumber = 0;

var firstLinkOption = "this is firstLink";
var secondLinkOption = "this is secondLink";
var thirdLinkOption = "this is thirdLink";
var fourthLinkOption = "this is fourthLink";
var fifthLinkOption = "this is fifthLink";
var sixthLinkOption = "this is sixthLink";
let clicks =0;
let dialogOptions = [];
var speed = 40;

dialogOptions.push(new DialogueOptions("test", "Second","Third", firstLinkOption));
dialogOptions.push(new DialogueOptions("test2", "Second2","Third2", secondLinkOption));
dialogOptions.push(new DialogueOptions("test2", "Second2","Third2", thirdLinkOption));

//var firstlinkDisabled = false;
// var secondLinkDisabled = false;

function choseLink(){
document.getElementById("userPara1").textContent = dialogOptions[clicks].username1;
document.getElementById("userPara2").textContent = dialogOptions[clicks].username2;
document.getElementById("changeText").textContent = dialogOptions[clicks].textBoxText;
document.getElementById("updateFirstLink").textContent =  dialogOptions[clicks].firstLinkOption;
document.getElementById("updateSecondLink").textContent =  dialogOptions[clicks].secondLinkOption;
  clicks++;
console.log(clicks);
}
