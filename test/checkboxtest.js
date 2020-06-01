// Part 3:handling checkbox
const internetPage=require("../pages/internetpage");

describe("how to handle checkbox in webdriver IO", function(){

    it("should show the link name",function(){
        browser.url("https://the-internet.herokuapp.com/");
        console.log("this is 6th element:",internetPage.getLinkElement(6).getText());
    });
    
    it("should click checkbox",function(){
        internetPage.clickOnLinkElement(6);
        browser.pause(5000);
        internetPage.headerDisplay.waitForDisplayed();
        internetPage.clickOnCheckbox(1);
        expect(internetPage.checkboxElement(1).isSelected()).equals(true);
        browser.pause(5000);
    });
    it("check header of checkbox",function(){
        browser.url("https://the-internet.herokuapp.com/");
        internetPage.clickOnLinkElement(6);
        internetPage.headerDisplay.waitForDisplayed();
        const text=internetPage.headerDisplay.getText();
        expect(text).equals("Checkboxes");
        
    });
})