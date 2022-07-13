import loginPage from '../support/pages/login'
import dashPage from '../support/pages/dashboard'

describe('login', function(){

    context('quando o usuário é muito bom', function(){

        const user = {
            name: "avatar",
            email: "avatar@samuraibs.com.br",
            password: "pwd123"
        }

        it('deve logar com sucesso', function(){
            loginPage.go()
            loginPage.form(user)
            loginPage.submit()

            dashPage.userLoggedIn(user.name)
        })        

    })

})