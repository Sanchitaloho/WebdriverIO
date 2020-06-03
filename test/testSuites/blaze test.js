
// Part 2:use blazemaster website
const blazePage=require("../../pages/blazemeter")

describe("blaze page elements", function(){

    it("get texts for all main links",function(){
    browser.url('https://www.blazemeter.com/');
    //blazePage.getTextForLi;
    //blazePage.useCasesElementsText;
    console.log("this is third element:",blazePage.specificChildElementText(3).getText());

    })
    it("main heading exists?",function(){
    console.log("is main heading displayed:",blazePage.mainHeader.isDisplayed());
    console.log("is main heading enabled:",blazePage.mainHeader.isEnabled());
    console.log("is main heading exists:",blazePage.mainHeader.isExisting());
    console.log("main heading displayed on main view:",blazePage.mainHeader.isDisplayedInViewport());
    })

    it("JMeter exists?",function(){
    console.log("main heading displayed on main view:",blazePage.jmeterLink.isDisplayedInViewport());
    })

    it("click on product link if displayed?",function(){
    blazePage.clickOnProductLink();
    browser.pause(5000);
    })
});