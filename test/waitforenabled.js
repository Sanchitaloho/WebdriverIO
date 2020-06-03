describe("wait to get submit button enabled and disabled", function(){

    it.skip("should wait for submit button to be enabled after clicking on checkbox element",function(){
        browser.url("https://classic.crmpro.com/register/");
        const checkbox=$('[name="agreeTerms"]');
        const submitbutton=$('#submitButton')
        checkbox.waitForDisplayed(5000); // default is 500 ms 
        checkbox.click();
        browser.pause(3000);
        submitbutton.waitForEnabled(4000);
       assert.equal(true,submitbutton.isEnabled());
       
    });
    it("should wait for submit button to be disabled",function(){
        browser.url("https://classic.crmpro.com/register/"); //$('//input[@name="agreeTerms"])
        const checkbox=$('[name="agreeTerms"]');
        const submitbutton=$('#submitButton')
        checkbox.waitForDisplayed();
        checkbox.click();
        //checkbox.waitForDisplayed(5000); // default is 500 ms 
        
        checkbox.click();
        //browser.pause(3000);
        submitbutton.waitForEnabled(4000, true); // default is 500 ms // takes as a false
        assert.equal(false, submitbutton.isEnabled());
    });
    it.only("should wait for preview button",function(){
        browser.url("https://app.hubspot.com/login"); 
        const email=$('#username');
        const pass=$('#password')
        const loginbutton=$('#loginBtn');
        const contact1=$('#nav-primary-contacts-branch')
        const contact2=$('#nav-secondary-contacts')
        const previewbutton=$("//span[text()='Chayan SahaRoy']//ancestor::a//following-sibling::span/button")
//sanchita LN1'
        //login steps
         // page explicit wait sync
        browser.waitUntil(function(){
            return email.isDisplayed()==true }
            // { return browser.getTitle()=='Reports' && header.getText()=='Sales DashBorad'}
            ,6000, 'email not displayed within given time'
        )
        //
        email.setValue('sanch.loho28@gmail.com')
        pass.setValue('Autotest@1234')
        loginbutton.click();
                
        //contact page
        contact1.waitForDisplayed();
        contact1.click();
        contact2.waitForDisplayed();
        contact2.click();
        previewbutton.moveTo();
        previewbutton.waitForExist(4000);
        previewbutton.waitForDisplayed();
        previewbutton.click();
        browser.pause(3000);
                
    });
})