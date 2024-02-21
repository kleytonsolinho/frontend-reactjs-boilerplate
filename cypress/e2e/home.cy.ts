describe('Home', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/')
	})

	it('should render the home page', () => {
		cy.get('[data-cy="home-title"]').should(
			'have.text',
			'BexUp Frontend Boilerplate'
		)
	})

	it('should render counter on click button', () => {
		cy.get('[data-cy="home-button-count"]').click()
		cy.get('[data-cy="home-button-count"]').should('have.text', 'count is 1')
	})

	it('should change language to english', () => {
		cy.get('[data-cy="language-select-en"]').click()
		cy.get('[data-cy="home-language-text"]').should('have.text', 'Hello World!')
	})

	it('should change language to spanish', () => {
		cy.get('[data-cy="language-select-es"]').click()
		cy.get('[data-cy="home-language-text"]').should(
			'have.text',
			'¡Hola, mundo!'
		)
	})

	it('should change language to portuguese', () => {
		cy.get('[data-cy="language-select-pt"]').click()
		cy.get('[data-cy="home-language-text"]').should('have.text', 'Olá mundo!')
	})
})
