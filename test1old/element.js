describe("interaction with web elements",function(){

    it("enter value in a field",function(){
        browser.url('/');
        const search=$('#twotabsearchtextbox');
        search.setValue('Apple');
        browser.pause(2000);

        const label=$('span.a-size-base.a-color-base');
        let text= label.getText();
        console.log(text);

    });
    it("get the text",function(){
        browser.url('/');
        const label=$('span.a-size-base.a-color-base');
        let text= label.getText();
        console.log(text);

    });
    it("click on a field",function(){
        browser.url('/');
        const icon=$('input.nav-input');
        icon.click();
       
    });
}); 