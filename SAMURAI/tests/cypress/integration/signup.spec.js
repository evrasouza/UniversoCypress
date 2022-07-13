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
            cy.postUser(user)
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

    context('quando a senha é muito curta', function() {

        const passwords = ['1', '2a', '3bc', 'asf4', 'es5tr']

        beforeEach(function(){
            signupPage.go()            
        })

        passwords.forEach(function(p){
            it('não deve cadastrar com a senha: ' + p, function () {

                const user = { name: 'Janick Gers', email: 'janickgers@samuraibs.com.br', password: p }

                signupPage.form(user)            
                signupPage.submit()                
            })
        })

        afterEach(function() {
            signupPage.alertHaveText('Pelo menos 6 caracteres')
        })
    })

    context('quando não preencho nenhum dos campos', function() {

        const alertMessages = [
            'Nome é obrigatório',
            'E-mail é obrigatório',
            'Senha é obrigatória'
        ]

        before(function(){
            signupPage.go()
            signupPage.submit()
        })

        alertMessages.forEach(function(alert){
            it('deve exibir ' + alert.toLowerCase(), function () {
                signupPage.alertHaveText(alert)                
            })
        })
    })
})

