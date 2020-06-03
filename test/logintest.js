// Part 4:Login screen test
const login=require("../pages/loginpage");
const logindata= require("../testdata/logindata")

describe("how to handle application login page in webdriver IO", function(){

    it("enter username",function(){
        browser.url("https://the-internet.herokuapp.com/login");
       // browser.url(`${browser.options.baseUrl}/login`);
        login.enterUsername(logindata.username);
        assert.equal(logindata.username,login.username.getValue()); // avoiding hard code data
        });
    
    it("enter password",function(){
        login.enterPassword(logindata.password);
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