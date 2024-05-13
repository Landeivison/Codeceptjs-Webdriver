var faker = require('faker');
Feature('login');

Scenario('login', ({ I }) => {

    I.amOnPage('/')
    I.click('Login')
    I.fillField('#user', 'teste@gmail.com')
    I.fillField('#password', '12345678')
    I.checkOption('#materialUnchecked')
    I.click('#btnLogin')
    I.see('Login realizado')
    I.wait(3)
    I.click('OK')
    I.see('DASHBOARD')
    I.wait(3)
});


