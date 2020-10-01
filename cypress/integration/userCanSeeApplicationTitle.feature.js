describe('Application main view', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://api.github.com/search/users?q=tom+repos:%3E42+followers:%3E1000",
      response: "fixture:data.json",
    });
    cy.visit('/')
  });

  it('contains title', () => {
    cy.get("section[name='title']")
      .should('contain', 'GitHub Search engine')
  });

  it('visitor can search for user', () => {
    cy.get("section[name='main']")
    
      
  });
  
});