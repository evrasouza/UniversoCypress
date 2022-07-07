it('deve exibir a mensagem de sucesso no popup', function () {
    cy.visit('/tables')
    cy.get('table tbody tr')
        .then(function(series){
            expect(series).to.have.length(7)
        })
})

it('deve exibir a serie Loki', function () {
    cy.visit('/tables')
    cy.contains('table tbody tr', 'Loki')
        .then(function(item){
            expect(item).to.contain('Marvel')
            expect(item).to.contain('Disney+')
            expect(item).to.contain('2021')
        })
})

it('deve remover a serie Round 6', function () {
    cy.visit('/tables')
    cy.contains('table tbody tr', 'Round 6')
        .then(function(item){
            item.find('.delete').click()
        })
        .should('not.exist')
})