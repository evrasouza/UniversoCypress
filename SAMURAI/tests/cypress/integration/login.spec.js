import loginPage from '../support/pages/login'
import dashPage from '../support/pages/dashboard'

describe('login', function () {

    context('quando o usuário é muito bom', function () {

        const user = {
            name: "avatar",
            email: "avatar@samuraibs.com.br",
            password: "pwd123",
            is_provider: true
        }

        before(function () {
            cy.postUser(user)
        })

        it('deve logar com sucesso', function () {
            loginPage.go()
            loginPage.form(user)
            loginPage.submit()

            dashPage.header.userLoggedIn(user.name)
        })

    })

    context.only('quando o usuário é bom mas a senha esta incorreta', function () {

        let user = {
            name: "krisium",
            email: "krisium@samuraibs.com.br",
            password: "pwd123",
            is_provider: true
        }

        before(function () {
            cy.postUser(user).then(function() {
                user.password = 'abc123'
            })
            
        })

        it('deve notificar erro de credenciais', function () {
            loginPage.go()
            loginPage.form(user)
            loginPage.submit()

            cy.wait(5000)            
        })

    })

})