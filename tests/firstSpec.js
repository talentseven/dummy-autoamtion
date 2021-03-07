const { browser } = require("protractor");

describe ("Frist protractor spec", function()
{

    it("Go To Google Page", function(){

        // debugger;
        browser.get("https://www.google.com");

        var text = browser.getCurrentUrl;
        expect(text == "https://www.google.com");

    });

});