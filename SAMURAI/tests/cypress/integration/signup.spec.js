
describe('Cadastro', function () {

    it('deve cadastrar um novo usuário', function () {

        const user = {
            name: 'Everton Souza',
            email: 'evrasouza@samuraibs.com.br',
            password: 'pwd123'
        }

        cy.task('removeUser', user.email)
            .then(function (result) {
                console.log(result)
            })

        cy.visit('/signup')

        cy.get('input[placeholder="Nome"]').type(user.name)
        cy.get('input[placeholder="E-mail"]').type(user.email)
        cy.get('input[placeholder="Senha"]').type(user.password)

        cy.contains('button', 'Cadastrar').click()

        cy.get('.toast')
            .should('be.visible')
            .find('p')
            .should('have.text', 'Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!')
    })

    it.only('deve exibir email já cadastrado', function () {

        const user = {
            name: 'Dave Murray',
            email: 'davemurray@samuraibs.com.br',
            password: 'pwd123',
            is_provider: true
        }

        cy.task('removeUser', user.email)
        .then(function (result) {
            console.log(result)
        })

        cy.request(
            'POST',
            'http://localhost:3333/users',
            user
            ).then(function(response) {
                expect(response.status).to.eql(200)
            })

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

