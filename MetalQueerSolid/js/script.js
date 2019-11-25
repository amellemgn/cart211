// var pageNumber = 0;
var blueImage = document.getElementById("blueimage");
var c;
var firstLinkOption = "this is firstLink bla bla bla lnwernlernlwnrlnerlewnnlwlrnwr";
var secondLinkOption = "this is secondLink lenenrlntlneltnelrtnlenrltenltnlnelnelnelnelrnt";
var thirdLinkOption = "this is thirdLink";
var fourthLinkOption = "this is fourthLink";
var fifthLinkOption = "this is fifthLink";
var sixthLinkOption = "this is sixthLink";
let clicks = 0;
let dialogOptions = [];
var speed = 40;


dialogOptions.push(new DialogueOptions("test", "Second", "Third", firstLinkOption));
dialogOptions.push(new DialogueOptions("test2", "Second2", "Third2", secondLinkOption));
dialogOptions.push(new DialogueOptions("test3", "Second3", "Third3", thirdLinkOption));
dialogOptions.push(new DialogueOptions("test4", "Second4", "Third4", fourthLinkOption));
dialogOptions.push(new DialogueOptions("test5", "Second5", "Third5", fifthLinkOption));
dialogOptions.push(new DialogueOptions("test6", "Second6", "Third6", sixthLinkOption));


function choseLink() {
  removeObjects();
  addObjects();
  typeWriter(dialogOptions[clicks]);
  //let typed = new Typed('#typed', dialogOptions[clicks].options);

  /*document.getElementById("userPara1").textContent = dialogOptions[clicks].username1;
  document.getElementById("userPara2").textContent = dialogOptions[clicks].username2;
  document.getElementById("changeText").textContent = dialogOptions[clicks].textBoxText;
  document.getElementById("updateFirstLink").textContent = dialogOptions[clicks].firstLinkOption;
  document.getElementById("updateSecondLink").textContent = dialogOptions[clicks].secondLinkOption;*/
  clicks++;

  console.log("clicks");
}

function typeWriter(e) {
  //  console.log(e.i);
  if (e.i < e.textBoxText.length) {
    document.getElementById("typed").innerHTML += e.textBoxText.charAt(e.i);
    console.log(e.textBoxText.charAt(e.i));
    e.i++;
    setTimeout(function() {
        typeWriter(e);
      },
      e.speed);
  }
}
/*  if (e.i < e.textBoxText.length && e.textBoxText === dialogOptions[clicks].secondLinkOption) {
    document.getElementById("blueimage").style.display = "inline";
  }
  if (e.i < e.textBoxText.length && e.textBoxText === dialogOptions[clicks].thirdLinkOption || e.textBoxText === dialogOptions[clicks].fifthLinkOption)
    document.getElementbyId("alert").autoplay == "true";
}
*/

function removeObjects() {
  var myobj = document.getElementById("userPara1");
  myobj.remove();
  var myobj1 = document.getElementById("userPara2");
  myobj1.remove();
  var myobj2 = document.getElementById("typed");
  myobj2.remove();
}

function addObjects() {
  var para = document.createElement("div");                 // Create a <div> element
  para.textContent = "This is a paragraph.";
  para.setAttribute("id", "userPara1");              // Insert text
  document.getElementById("textingBox").appendChild(para);     // Append <div> to <div> with id="myDIV"

  var para1 = document.createElement("div");
  para1.textContent = "This is a paragraph.";
  para1.setAttribute("id", "userPara2");
  document.getElementById("textingBox").appendChild(para1);

  var para2 = document.createElement("div");
  para2.textContent = "This is a paragraph.";
  para2.setAttribute("id", "typed");
  document.getElementById("textingBox").appendChild(para2);
}

function mousePressed() {
  if (document.getElementById("blueimage").style.display = "inline") {
    document.getElementById("blueimage").style.display = "none";
  }
}
