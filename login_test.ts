var faker = require('faker');
Feature('login');

Scenario('Create New Account', ({ I }) => {

    I.amOnPage('/')
    I.click('Cadastro')
    I.fillField('#user', faker.name.firstName())
    I.fillField('#email', faker.internet.email())
    I.fillField('#password', '12345678')
    I.click('#btnRegister')
    I.see('Cadastro realizado!')
    I.wait(3)
    I.click('OK')
    I.see('DASHBOARD')
    I.wait(3)
});


