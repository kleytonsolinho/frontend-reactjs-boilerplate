describe('Home', () => {
	it('should render the home page', () => {
		cy.visit('http://localhost:3000/')
		cy.get('h1').should('have.text', 'BexUp Frontend Boilerplate')
	})

	it('should render counter on click button', () => {
		cy.visit('http://localhost:3000/')
		cy.get('button').click()
		cy.get('button').should('have.text', 'count is 1')
	})
})
