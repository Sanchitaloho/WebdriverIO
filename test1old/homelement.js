const homepage=require("../pages/homepage")

describe ("home page elements handled",function(){

    it("verify home page elements",function(){
        browser.url('https://www.freshworks.com');
        let text2=homepage.pageheader.getText();
        console.log(text2);
        console.log(homepage.subheading.getText());
        homepage.supportlink.click();
        browser.pause(5000);


    });

});