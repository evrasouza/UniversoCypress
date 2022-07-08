
describe('Suite de testes', function () {

    before(function(){
        cy.log('Aqui temos algo que roda antes de todos os testes')
    })

    beforeEach(function(){
        cy.log('Aqui temos algo que roda antes de cada teste')
    })

    it('teste 1', function () {
        cy.log('Testando o teste 1')
    })
    
    it('teste 2', function () {
        cy.log('Testando o teste 22')
    })
    
    it('teste 3', function () {
        cy.log('Testando o teste 3')
    })

    afterEach(function(){
        cy.log('Aqui temos algo que roda depois de cada teste')
    })

    after(function(){
        cy.log('Aqui temos algo que roda depois de todos os testes')
    })
})

