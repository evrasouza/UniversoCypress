

it('deve marcar thoir Ragnarok', function () {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/radios')

    cy.get('input[value=thor3]')
        .click()
        .should('be.checked')

})