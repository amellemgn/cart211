class DialogueOptions {
constructor(linkName, firstLinkOption, secondLinkOption, textBoxText){
  this.linkName = linkName;
  this.firstLinkOption = firstLinkOption;
  this.secondLinkOption = secondLinkOption;
  this.textBoxText = textBoxText;
  this.username1 = "Sabine";
  this.username2 = "Amelle";


let options = {
  strings: [this.textBoxText],
  typeSpeed: 40
};
    let typed = new Typed('#typed', options);
}

/* mouseover(){

}*/

/*choseLink(){
  document.getElementById("changeText").textContent = "CHANGED";
  document.getElementById("updateFirstLink").textContent = this.firstLinkOption;
  document.getElementById("updateSecondLink").textContent = this.secondLinkOption;
}*/

}
