
describe('Тестирование главной гугла', function () {
   it('Проверка, что при поиске теслы в выдаче есть тесла', function () {
        cy.visit('https://www.nic.ru/');
        cy.get('.TrXpn').type('rocket').type('{enter}');
        cy.get('._1k-bt > .zWjrM > ._38LAu > ._38cK6 > ._2h_aM > .Kg6KF').click();
        
    })
})



