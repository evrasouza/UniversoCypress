

it('deve cadastrar um novo usuário', function () {
    
    
    const name = 'Everton Souza'
    const email = 'everton@samuraibs.com.br'
    const password = 'pwd123'
    
    cy.visit('/signup')

    cy.get('input[placeholder="Nome"]').type(name)
    cy.get('input[placeholder="E-mail"]').type(email)
    cy.get('input[placeholder="Senha"]').type(password)

})