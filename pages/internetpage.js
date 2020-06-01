class InternetPage{

get headerDisplay(){
    return $('h3')
}    

getLinkElement(index){
    return $(`ul li:nth-child(${index}) a`);
}
clickOnLinkElement(index){
    this.getLinkElement(index).waitForDisplayed();
    this.getLinkElement(index).click();
}
checkboxElement(index){
  return $(`form#checkboxes input:nth-child(${index})`);
}
clickOnCheckbox(index){
    this.checkboxElement(index).waitForDisplayed();
    this.checkboxElement(index).click();
}


}
module.exports=new InternetPage