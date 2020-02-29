context('Actions', () => {

    before(() => {
      cy.server()
      cy.visit('/')
    })

    it('longClick', () => {
      cy.get('.square')
        .trigger("pointerdown", { button: 0 })
        .wait(500)
        .trigger('pointerup', { button: 0 })
    })

    it('verifyDimensions', () => {
      cy.get(".square.expand")
      .should('have.css', 'width', '225px')
      .and('have.css', 'height', '225px')
    })
})