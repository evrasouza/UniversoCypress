

it('deve marcar thor Ragnarok', function () {
    cy.visit('/radios')

    cy.get('input[value=thor3]')
        .click()
        .should('be.checked')

})