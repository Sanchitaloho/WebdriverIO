class SpiceJet{

    get loginsignuplink(){return $('#ctl00_HyperLinkLogin')}  
    get spiceClubMembers(){return $('=SpiceClub Members')}// to get the linked test
    get memberLogin(){return $('=Member Login')}
    get enterbox(){return $('#target')} 
    get youEntered(){return $('#result')} 

    getYouEnteredText()
    {   this.youEntered.waitForDisplayed();
       return this.youEntered.getText();
    }

    enterSearch(text){
        this.enterbox.waitForDisplayed();
        this.enterbox.setValue(text);
    }

    moveToElement(element)
    {   
        element.waitForDisplayed();
        element.moveTo(); // point to middle of element
        
    }

    clickElement(element){
        element.waitForDisplayed();
        element.click();
    }
}
module.exports=new  SpiceJet();