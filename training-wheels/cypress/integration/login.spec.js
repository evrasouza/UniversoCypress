

it('deve exibir a home page', function () {
    cy.visit('https://training-wheels-qaninja.herokuapp.com/login')

    cy.get('#nickId')
        .type('papitorocks')

    cy.get('#passId')
        .type('pwd123')
})