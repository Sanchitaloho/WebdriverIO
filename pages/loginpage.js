class loginPage{

    get username(){return $('#username') } 
    get password(){return $('#password') } 
    get loginButton(){return $('button') } 


    enterUsername(uname){
        this.username.waitForDisplayed();
        this.username.setValue(uname);
    }

    enterPassword(pass){
        this.password.waitForDisplayed();
        this.password.setValue(pass);
    }

    clickLoginBtn(){
        this.loginButton.waitForDisplayed();
        this.loginButton.click();
    }

}
module.exports=new  loginPage();