
const niceIFrame = function(){
    return cy
        .get('#weareqaninja')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
}

const badIFrame = function(){
    return cy
        .get('iFrame[src*=instagram]')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
}

it('Deve validar o nome do perfil',function(){
    cy.visit('/nice_iframe')

    niceIFrame().find('.UsernameText')    
    .should('have.text','qacademy_oficial')
})

it('Deve validar o nome do perfil',function(){
    cy.visit('/bad_iframe')

    badIFrame().find('.UsernameText')    
    .should('have.text','qacademy_oficial')
})