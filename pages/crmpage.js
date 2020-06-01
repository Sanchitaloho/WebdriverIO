class crmPage{

    get day(){return $('#day') } // for dropdown
    get month(){return $('#month') } // for dropdown
    get year(){return $('#year') }
    
    

    get forgotpassword(){return $('=Forgot Password?') } //for scolling to view
    
    enterUsername(uname){
        this.username.waitForDisplayed();
        this.username.setValue(uname);
    }
    moveToElement(element)
    {   
        element.waitForDisplayed();
        element.moveTo(); // point to middle of element
        
    }
    selectDay(){
        this.day.selectByVisibleText('10');
    }
    selectMonth(){
        this.day.selectByIndex('9');
    }
}

module.exports=new  crmPage();