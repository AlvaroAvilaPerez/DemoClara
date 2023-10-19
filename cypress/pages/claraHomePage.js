class ClaraHomePage {
  
  elements ={
    mainTitle : () => cy.get('#agiliza-todos-los-pagos-en-tu-empresa-de-forma-simple-y-transparente'),
    menuOfLanguage : () => cy.get('div.menu-language'),
    countrySpan : () => cy.get('a span'),
  }
  
  getMainHeaderTitle() {
    return this.elements.mainTitle();
  }
  
  selectCountry(country) {
    this.elements.menuOfLanguage().click();
    this.elements.countrySpan().contains(country).click({ force: true });
  }
}
  
module.exports = new ClaraHomePage();

