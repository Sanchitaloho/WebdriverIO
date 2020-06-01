// Part 7:test javascript alert popup
// .dismissAlert(), acceptAlert, getAlertText, sendAlertText
const alertobj=require("../pages/alertpage");


describe("Handle alert popups using webdriver IO", function(){

    it("accept allert",function(){
        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        alertobj.clickOnAlertbutton(1);
        const alertext=browser.getAlertText();
        console.log(alertext);
        assert.equal("I am a JS Alert",alertext);
        browser.acceptAlert();
        console.log(alertobj.getresultText);
        browser.pause(3000);
        
        });
    
    it("Dismiss Alert",function(){
        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        alertobj.clickOnAlertbutton(2);
        browser.dismissAlert();
        console.log(alertobj.getresultText);
        assert.equal('You clicked: Cancel',alertobj.getresultText());
        browser.pause(3000);
        
    });
 

    it("enter text in alert using webdriver IO and accept",function(){
        browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        alertobj.clickOnAlertbutton(3);
           
        browser.sendAlertText("Hi Sanchita ,this is alert text");
        browser.acceptAlert();
        
        assert.equal('You entered: Hi Sanchita ,this is alert text',alertobj.getresultText());
        browser.pause(3000);
    });  
}); //$('input[@type='submit']')
