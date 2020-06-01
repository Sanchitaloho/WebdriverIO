// Part 5:test mouse actions and keyboard ,drag and drop
const spicejetpage=require("../pages/keyboardmouseactions");


describe("Page actions using webdriver IO", function(){

    it("move to element",function(){
        browser.url("https://www.spicejet.com/");
        spicejetpage.moveToElement(spicejetpage.loginsignuplink);
        spicejetpage.moveToElement(spicejetpage.spiceClubMembers);
        spicejetpage.clickElement(spicejetpage.memberLogin);
        browser.pause(3000);
        
        });
    
    it("KEY Actions performed TAB",function(){
        browser.url("https://the-internet.herokuapp.com/key_presses?");
        spicejetpage.enterSearch('Tab');
        const entry=spicejetpage.getYouEnteredText();
        console.log("the text displayed below box is",entry);
        browser.pause(3000);
       assert.equal('You entered: TAB',entry);
        
    });
}); 

describe("Drag and drop actions using webdriver IO", function(){

        it("move to element",function(){
            browser.url("https://demos.telerik.com/kendo-ui/dragdrop/index");
            browser.pause(3000);
            const source= $(' #draggable');
            const target= $(' #droptarget');
            source.dragAndDrop(target,10);
            browser.pause(5000);
            
        });   
})