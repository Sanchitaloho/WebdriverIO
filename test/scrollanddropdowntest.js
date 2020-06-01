// Part 6:test scoll and dropdown
// selectbytext,byIndex,byattribute can only apply if there is select tag
const crmpage=require("../pages/crmpage");


describe("scroll using webdriver IO", function(){

    it.skip("click on forgot password element",function(){
        browser.url("https://classic.crmpro.com/");
        console.log("in view port",crmpage.forgotpassword.isDisplayedInViewport());
        crmpage.forgotpassword.scrollIntoView();
        console.log("in view port",crmpage.forgotpassword.isDisplayedInViewport());
        crmpage.forgotpassword.click();

    });
    
}); 

describe("scroll ,move into view and then click", function(){

    it.skip("move to element",function(){
        browser.url("https://classic.crmpro.com/");
        console.log("in view port",crmpage.forgotpassword.isDisplayedInViewport());
        crmpage.forgotpassword.scrollIntoView();
        console.log("in view port",crmpage.forgotpassword.isDisplayedInViewport());
        crmpage.moveToElement(crmpage.forgotpassword);
        crmpage.forgotpassword.click();
        browser.pause(3000);
                       
    }); 
});
describe("Dropdown handling", function(){

    it.skip("Select dropdown values by text",function(){
        browser.url("https://www.facebook.com/");
        crmpage.selectDay();
        browser.pause(3000);
                           
    });  
    it.skip("Select dropdown values by index and attribute",function(){
        browser.url("https://www.facebook.com/");
        crmpage.selectMonth();
        crmpage.year.selectByAttribute('value',"2015")
        browser.pause(3000);
    });
   it("Get all values from month dropdown ",function(){
        browser.url("https://www.facebook.com/");
        let list=  $$('#month option');
        for(let i=1;i<list.length;i++){  
        const element=list[i];
        console.log(element.getText()); // if (element.getText()=="Mar"){element.click();break;}
        }
    });
});