describe('Home Page', () => {
    beforeEach(() => {
        // Log in before each test case
        cy.visit('https://sakshingp.github.io/assignment/login.html');
        cy.get('#username').should('be.visible').type('sample');
        cy.get('#password').should('be.visible').type('sample123');
        cy.get('#log-in').should('be.visible').click();


        cy.url().should('eq', "https://sakshingp.github.io/assignment/home.html");
    });
});

it('should check if the AMOUNT column values are sorted', () => {
    // Navigate to the home page
    cy.visit('https://sakshingp.github.io/assignment/home.html');

    // Wait for the transaction table to be visible
    cy.get('.table-responsive').should('be.visible');

    // Click the AMOUNT header in the transaction table
    cy.get('th#amount.text-right').should('be.visible').click();

    // Retrieve the transaction amounts
    cy.get('.table-responsive tbody tr').then((rows) => {
        const amounts = [];

        rows.each((index, row) => {
            const amount = Cypress.$(row).find('td:nth-child(5)').text();
            amounts.push(parseFloat(amount));
        });

        // Check if the amounts are sorted in ascending order
        const sortedAmounts = [...amounts].sort((a, b) => a - b);
        expect(amounts).to.deep.equal(sortedAmounts);
    });
});