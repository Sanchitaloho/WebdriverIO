class AlertPage{

    get result(){return $('#result') }

    getresultText(){
       return this.result.getText();

    }
    getalertButton(index){
        return $(`ul li:nth-child(${index}) button`) 
    
    } // method for getting all buttons

    clickOnAlertbutton(index){
      this.getalertButton(index).waitForDisplayed();  
      this.getalertButton(index).click();
    }

}
module.exports=new  AlertPage();