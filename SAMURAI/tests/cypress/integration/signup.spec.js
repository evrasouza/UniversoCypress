
describe('Cadastro', function () {

    context('Quando o usuario é novato', function () {
        const user = {
            name: 'Everton Souza',
            email: 'evrasouza@samuraibs.com.br',
            password: 'pwd123'
        }

        before(function () {
            cy.task('removeUser', user.email)
                .then(function (result) {
                    console.log(result)
                })
        })

        it('deve cadastrar com sucesso', function () {

            cy.visit('/signup')

            cy.get('input[placeholder^="Nome"]').type(user.name)
            cy.get('input[placeholder$="email"]').type(user.email)
            cy.get('input[placeholder*="senha"]').type(user.password)

            cy.contains('button', 'Cadastrar').click()

            cy.get('.toast')
                .should('be.visible')
                .find('p')
                .should('have.text', 'Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!')
        })

    })

    context('Quando o email já existe', function () {

        const user = {
            name: 'Dave Murray',
            email: 'davemurray@samuraibs.com.br',
            password: 'pwd123',
            is_provider: true
        }

        before(function () {

            cy.task('removeUser', user.email)
                .then(function (result) {
                    console.log(result)
                })

            cy.request(
                'POST',
                'http://localhost:3333/users',
                user
            ).then(function (response) {
                expect(response.status).to.eql(200)
            })

        })

        it('não deve cadastrar o usuário', function () {

            cy.visit('/signup')

            cy.get('input[placeholder^="Nome"]').type(user.name)
            cy.get('input[placeholder$="email"]').type(user.email)
            cy.get('input[placeholder*="senha"]').type(user.password)

            cy.contains('button', 'Cadastrar').click()

            cy.get('.toast')
                .should('be.visible')
                .find('p')
                .should('have.text', 'Email já cadastrado para outro usuário.')

        })

    })


})

