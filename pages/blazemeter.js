class BlazePage{

    get mainHeader(){
        return $('h2.home_title')
    }

    get parent(){
        return $('ul.list-nav-links')
    }
    get parentproductLink(){
        return $('ul.list-nav-links')
    }
    get jmeterLink(){
        return $("//a[text()='JMeter']")
    }
    get childElements(){
        return this.parent.$$('li')
    }

    clickOnProductLink(){
        if(this.parentproductLink.isDisplayed()==true){
            this.parentproductLink.click();
        }
    }
    specificChildElementText(index){
        return this.parent.$(`li:nth-child(${index})`)
    }
    get getTextForLi(){
        return this.childElements.filter(element=>{
            console.log(element.getText());
        });
    }
    get useCasesElements(){
        return $$('div#main_b_footer_second_block>ul>li')
    }
    get useCasesElementsText(){
        return this.useCasesElements.filter(element=>{
            console.log(element.getText());
        });
    }   
        
}

module.exports=new BlazePage();
