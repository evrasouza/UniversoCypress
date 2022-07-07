


it('selecionar data de naascimento', function () {
    cy.visit('/datepicker')

    const date = {
        month: 'jul',
        year: '1983',
        day: '19'
    }

    cy.get('.datetimepicker-dummy-input').click()

    cy.get('.datepicker-nav-month').click()
    cy.contains('.datepicker-month', date.month).click()

    cy.get('.datepicker-nav-year').click()
    cy.contains('.datepicker-year span', date.year).click()

    cy.contains('button[class=date-item]', date.day).click()
})