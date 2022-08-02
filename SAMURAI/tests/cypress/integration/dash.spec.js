const { CopyResponse } = require("pg-protocol/dist/messages")


    describe('dashboard', function () {

        context('quando o cliente faz o agendamento no app mobile', function () {

            const data = {
                customer: {
                    name: 'Nikki Sixx',
                    email: 'sixx@motleycure.com',
                    password: 'pwd123',
                    is_provider: false
                },
                samurai: {
                    name: 'Ramon Valdes',
                    email: 'ramon@televisa.com',
                    password: 'pwd123',
                    is_provider: true
                }
            }

            before(function () {
                cy.postUser(data.customer)
                cy.postUser(data.samurai)

                cy.apiLogin(data.customer)
                cy.log('Conseguimos pegar o token ' + Cypress.env('apiToken') )
            })

    
            it('o mesmo deve ser exibido no dashboard', function () {


            })
    
        })

    })

Cypress.Commands.add('apiLogin', function(user){

        const payload = {
            email: user.email,
            password: user.password
        }

        cy.request({
            method: 'POST',
            url: 'http://localhost:3333/sessions',
            body: payload
        }).then(function(response) {
            expect(response.status).to.eql(200)
            Cypress.env('apiToken', response.body.token)
        })
            
            
        
})