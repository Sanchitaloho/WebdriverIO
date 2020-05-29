class homepage{

    get pageheader()  { return $('h1')}

    get subheading()  { return $('div.banner-text-content>p.sub-text')}

    get supportlink() { return $("//span[text()='Support']")}

}
module.exports= new homepage();
