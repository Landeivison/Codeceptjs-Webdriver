Feature('login');

Scenario('Create New Account', ({ I }) => {

    I.amOnPage('/')
    I.click('Cadastro')
    I.fillField('#user', 'testelan3')
    I.fillField('#email', 'lan3@gmail.com')
    I.fillField('#password', '12345678')
    I.click('#btnRegister')
});

Scenario('Login', ({ I }) => {

    I.amOnPage('/')
    I.click('Login')
    I.fillField('#user', 'lan3@gmail.com')
    I.fillField('#password', '12345678')
    I.checkOption('#materialUnchecked')
    I.wait(2)
    I.click('#btnLogin')

    I.see('Login realizado')
    I.wait(3)
    I.click('OK')
    I.see('lan3@gmail.com')
    I.wait(3)



});


