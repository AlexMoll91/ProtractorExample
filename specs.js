
describe('sathyasai TEST', function() {
    it('should greet the named user', function() {

        // Declare constants
        var question = '75*45456';
        var answer = '3409200';

        //Verify page Load
        expect(browser.getCurrentUrl()).toBe(browser.baseUrl);

        //Enter question and submit
        element(by.id('query'))
            .sendKeys(question);
        element(by.name('equal'))
            .click();

        //verify page loads
        expect(browser.getCurrentUrl()).toBe('http://www.wolframalpha.com/input/?i=75*45456^');

        //verify math is correct
        expect(element(by.xpath("//a[@class='link ng-scope']"))
            .getAttribute('title').toString())
            .toEqual(answer);

        });
});
