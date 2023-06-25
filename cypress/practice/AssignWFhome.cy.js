describe('HomePage', () => {
    beforeEach(() => {
        // Log in before each test case
        cy.visit('https://sakshingp.github.io/assignment/login.html');
        cy.get('#username').type('sample');
        cy.get('#password').type('sample123');
        cy.get('#log-in').click();
        cy.url().should('eq', 'https://sakshingp.github.io/assignment/home.html');
    });

    it('should sort values in the AMOUNT column', () => {
        // Click the AMOUNT header in the transaction table
        cy.get('th').contains('AMOUNT').click();

        // Get all the values in the AMOUNT column
        cy.get('td:nth-child(6) span.amount').then(($nowrap) => {
            const amounts = $nowrap.map((_, nowrap) => Number(nowrap.textContent.replace(/[^0-9]/g, ''))).get();

            // Check if the values are sorted in ascending order
            const sortedAmounts = [...amounts].sort((a, b) => a - b);
            expect(amounts).to.deep.equal(sortedAmounts);
        });
    });
});