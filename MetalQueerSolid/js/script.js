// var pageNumber = 0;

var firstLinkOption = "this is firstLink";
var secondLinkOption = "this is secondLink";
var thirdLinkOption = "this is thirdLink";
var fourthLinkOption = "this is fourthLink";
var fifthLinkOption = "this is fifthLink";
var sixthLinkOption = "this is sixthLink";
let clicks =0;
let dialogOptions = [];

dialogOptions.push(new DialogueOptions("test", "Second","Third", "hello"));
dialogOptions.push(new DialogueOptions("test2", "Second2","Third2", "goodbye"));
dialogOptions.push(new DialogueOptions("test2", "Second2","Third2", "goodbye again"));

//var firstlinkDisabled = false;
// var secondLinkDisabled = false;

function choseLink(){

document.getElementById("changeText").textContent = dialogOptions[clicks].textBoxText;
document.getElementById("updateFirstLink").textContent =  dialogOptions[clicks].firstLinkOption;
document.getElementById("updateSecondLink").textContent =  dialogOptions[clicks].secondLinkOption;
  clicks++;
console.log(clicks);
}
