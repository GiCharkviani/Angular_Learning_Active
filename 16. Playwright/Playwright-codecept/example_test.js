Feature('My test Suite');

Scenario('Should load example.com website', ({ I }) => {
    I.amOnPage("https://www.example.com");
    I.see("Example"); // checking if specified text is visible
    I.dontSee("Google");
    I.seeElement("h1");
    I.dontSeeElement("#idontexist");
});

Scenario('Should load example.com website - second test', ({ I }) => {
    I.amOnPage("https://www.example.com");
    I.see("Example"); // checking if specified text is visible
    I.dontSee("Google");
    I.seeElement("h1");
    I.dontSeeElement("#idontexist");
});

Scenario('Should load example.com website - third test', ({ I }) => {
    I.amOnPage("https://www.example.com");
    I.see("Example"); // checking if specified text is visible
    I.dontSee("Google");
    I.seeElement("h1");
    I.dontSeeElement("#idontexist");
});
