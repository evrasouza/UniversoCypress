

it('deve selecionar uma unica opcao', function () {
    cy.visit('/apps/select2/index.html')

    cy.get('.select2-selection--single').click()
    cy.contains('.select2-results__option', 'Cypress').click()
})


it('deve selecionar multiplas opcoes', function () {
    cy.visit('/apps/select2/index.html')

    const framework = [
        'Cypress',
        'Robot Framework',
        'Protractor'
    ]

    framework.forEach(function(framework){
        cy.get('.select2-selection--multiple').click()
        cy.contains('.select2-results__option', framework).click()
    })    
})