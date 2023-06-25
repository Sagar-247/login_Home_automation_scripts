describe('Login', () => {
    it('should log in with valid credentials', () => {
        cy.visit("https://sakshingp.github.io/assignment/login.html");

        cy.get('#username').should('be.visible').type('sample');
        cy.get('#password').should('be.visible').type('sample123');


        cy.get('#log-in').should('be.visible').click();


        cy.url().should('eq', "https://sakshingp.github.io/assignment/home.html");
    })
})