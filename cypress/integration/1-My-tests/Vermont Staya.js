
describe('Тестирование staya', function () {
    
    it('Проверка успешной авторизации', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('adelina.pospelova@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('pad.98');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы')
         })

})