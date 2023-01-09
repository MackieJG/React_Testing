describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  it('number buttons should update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '22')
  })
  it('the multiple arithmetical operator - 5 multiplied by 5 equals 25', () => {
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '25')
  })
  it('chaining multiple operations together - 3 add 3 add 3 = 9', ()=> {
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '9')
  })
  it('45000 multiply 45000', () => {
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '20250000')
  })
  it('5 - 6 should equal -1', () => {
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1')
  })
  it('5.3 + 5.3 should equal 10.6', () => {
    cy.get('#number5').click()
    cy.get('#decimal').click()
    cy.get('#number3').click()
    cy.get('#operator_add').click();
    cy.get('#number5').click()
    cy.get('#decimal').click()
    cy.get('#number3').click()
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '10.6')
  })
  it('85 divided by 0 should equal Error not Infinity', () =>{
    cy.get('#number8').click();
    cy.get('#number5').click();
    cy.get('#operator-divide').click()
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0')
  })

})