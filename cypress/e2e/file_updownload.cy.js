/// < reference types="cypress">

describe('File upload', () => {
  
  it('uploading text file', () => {
    cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
    cy.get('[type="file"]').attachFile('f.txt')
    cy.get('[type="text"]').type('This is just for the love of the code')
    cy.get('[type="submit"]').click()
  })

  it('uploading json doc', () => {
    cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
    cy.get('[type="file"]').attachFile('example.json')
    cy.get('[type="text"]').type('Json doc')
    cy.get('[type="submit"]').click()
  })
})

describe('File download', () => {
  
  it('download pdf', () => {
    cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
    cy.get('[type="file"]').attachFile('f.txt')
    cy.get('[type="text"]').type('This is just for the love of the code')
    cy.get('[type="submit"]').click()
  })
})