


it('deve marcar os top 5 filmes da marvel', function () {
    cy.visit('/javascript_alerts')

        cy.contains('button', 'Alerta')
            .click()
        cy.on('window:alert', function(result){
            expect(result).to.equal('Isto é uma mensagem de alerta')
        })

})