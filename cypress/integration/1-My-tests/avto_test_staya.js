describe('Тестирование staya', function () {
    
    it('login[+],passwoed[+]', function () {
    	cy.visit('https://staya.dog/');
    	cy.get('.header-bottom__right--link').click();
    	cy.get('.auth-form > form > [type="email"]').type('koteonova95@gmail.com');
    	cy.get('.auth-form > form > [type="password"]').type('Test1122');
    	cy.get('.auth-form__submit').click();
    	cy.contains('Мои заказы');
})
})

    
    it('login[+],passwoed[-]', function () {
    	cy.visit('https://staya.dog/');
    	cy.get('.header-bottom__right--link').click();
    	cy.get('.auth-form > form > [type="email"]').type('koteonova95@gmail.com');
    	cy.get('.auth-form > form > [type="password"]').type('Test1123');
    	cy.get('.auth-form__submit').click();
    	cy.contains('Невозможно войти с предоставленными учетными данными.');
})