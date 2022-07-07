


it('deve exibir uma notificação toaster rapida', function () {
    cy.visit('/toaster')
    cy.contains('button', 'Toast Rápido').click()
    cy.get('.notification')
        .should('be.visible')
        .should('have.text', 'Essa notificação é muito rápida!')
})

it('deve exibir uma notificação toaster lenta', function () {
    cy.visit('/toaster')
    cy.contains('button', 'Toast Lento').click()
    cy.get('.notification')
    .should('be.visible')
    .should('have.text', 'Essa notificação é mais fácil para testar!')
    
})