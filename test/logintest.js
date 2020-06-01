// Part 4:Login screen test
const login=require("../pages/loginpage");


describe("how to handle login page in webdriver IO", function(){

    it("enter username",function(){
        browser.url("https://the-internet.herokuapp.com/login");
       // browser.url(`${browser.options.baseUrl}/login`);
        login.enterUsername('tomsmith');
        assert.equal('tomsmith',login.username.getValue());
        });
    
    it("enter password",function(){
        login.enterPassword('SuperSecretPassword');
        assert.equal('SuperSecretPassword',login.password.getValue());
        
    });

    it("should click Login button",function(){
        login.clickLoginBtn();
        
    });
    it("clear username and password",function(){
        login.username.click();
        login.username.clearValue();
        assert.equal('',login.username.getValue());
        
    });
});