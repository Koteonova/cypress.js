describe('Тестирование Стаи', function () {
    it('Добавление товара в корзину в стае', function () {
        cy.visit('https://staya.dog/');
        cy.get('.slider--btn').click();
        cy.get(':nth-child(7) > :nth-child(1) > .product-item__cover > .product_preview_images > :nth-child(2) > .picture-wp > .picture-wp__img').click();
        cy.get('.s-select--caption').click();
        cy.get('.s-select--option_list > :nth-child(2)').click();
        cy.get('.block-payment__button').click();

    })
})
