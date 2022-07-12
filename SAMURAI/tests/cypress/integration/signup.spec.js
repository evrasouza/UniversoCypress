
describe('Cadastro', function () {

    const user = {
        name: 'Everton Souza',
        email: 'evrasouza@samuraibs.com.br',
        password: 'pwd123'
    }

    it('deve cadastrar um novo usuário', function () {

        cy.task('removeUser', user.email)
            .then(function (result) {
                console.log(result)
            })

        cy.visit('/signup')

        cy.get('input[placeholder="Nome"]').type(user.name)
        cy.get('input[placeholder="E-mail"]').type(user.email)
        cy.get('input[placeholder="Senha"]').type(user.password)

        // cy.intercept('POST', '/users', {
        //     statusCode: 200
        // }).as('postUser')

        cy.contains('button', 'Cadastrar').click()

        // cy.wait('@postUser')

        cy.get('.toast')
            .should('be.visible')
            .find('p')
            .should('have.text', 'Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!')
    })

    it('deve exibir email já cadastrado', function () {

        cy.visit('/signup')

        cy.get('input[placeholder="Nome"]').type(user.name)
        cy.get('input[placeholder="E-mail"]').type(user.email)
        cy.get('input[placeholder="Senha"]').type(user.password)

        cy.contains('button', 'Cadastrar').click()

        cy.get('.toast')
            .should('be.visible')
            .find('p')
            .should('have.text', 'Email já cadastrado para outro usuário.')

    })

})

