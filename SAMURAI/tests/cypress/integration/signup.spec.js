
describe('Cadastro', function () {

    it('deve cadastrar um novo usuário', function () {

        const name = 'Everton Souza'
        const email = 'evrasouza@samuraibs.com.br'
        const password = 'pwd123'

        cy.task('removeUser', email)
            .then(function (result) {
                console.log(result)
            })

        cy.visit('/signup')

        cy.get('input[placeholder="Nome"]').type(name)
        cy.get('input[placeholder="E-mail"]').type(email)
        cy.get('input[placeholder="Senha"]').type(password)

        // cy.intercept('POST', '/users', {
        //     statusCode: 200
        // }).as('postUser')

        cy.contains('button', 'Cadastrar').click()

        // cy.wait('@postUser')

        cy.get('.toast')
            .should('be.visible')
            .find('p')
            .should('have.text', 'Agora você pode fazer seu login no Samurai Barbershop!')
    })

    it('deve exibir email já cadastrado', function () {

        const name = 'Everton Souza'
        const email = 'evrasouza@samuraibs.com.br'
        const password = 'pwd123'

        cy.visit('/signup')

        cy.get('input[placeholder="Nome"]').type(name)
        cy.get('input[placeholder="E-mail"]').type(email)
        cy.get('input[placeholder="Senha"]').type(password)

        cy.contains('button', 'Cadastrar').click()

        cy.get('.toast')
            .should('be.visible')
            .find('p')
            .should('have.text', 'Email já cadastrado para outro usuário.')

    })

})

