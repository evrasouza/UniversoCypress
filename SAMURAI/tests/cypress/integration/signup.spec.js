import signupPage from '../support/pages/signup'

describe('Cadastro', function () {

    context('Quando o usuario é novato', function() {
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
            signupPage.go()
            signupPage.form(user)
            signupPage.submit()
            signupPage.toast.shouldHaveText('Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!')
        })
    })

    context('Quando o email já existe', function() {

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
            signupPage.go()
            signupPage.form(user)
            signupPage.submit()
            signupPage.toast.shouldHaveText('Email já cadastrado para outro usuário.')
        })
    })

    context('quando o email é incorreto', function() {

        const user = {
            name: 'Steve Harris',
            email: 'steveharris.samuraibs.com.br',
            password: 'pwd123',
            is_provider: true
        }

        it('deve exibir mensagem de alerta', function () {
            signupPage.go()
            signupPage.form(user)            
            signupPage.submit()
            signupPage.alertHaveText('Informe um email válido')

        })

    })
})

