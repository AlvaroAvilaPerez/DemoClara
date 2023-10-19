import ClaraHomePage from '../pages/ClaraHomePage';

context('Clara Home Page', () => {
  beforeEach(() => {
    cy.visit('https://www.clara.com/es-mx/');
  });

  describe('Verify Clara Home Page Title', () => {
    it('Verify Clara Home Page Title', () => {
      let expectedSpanishTitle = 'Agiliza todos los pagos en tu empresa de forma simple y transparente';
      let expectedPortugueseTitle = 'Controle os pagamentos da sua empresa de forma simples e transparente';
      let Country = 'Brasil'
      ClaraHomePage.getMainHeaderTitle().should('have.text', expectedSpanishTitle);
      ClaraHomePage.selectCountry(Country);
      ClaraHomePage.getMainHeaderTitle().should('have.text', expectedPortugueseTitle);
    });
  });
});
