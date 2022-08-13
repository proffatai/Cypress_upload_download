/// < reference types="cypress">
//We need to add the code on line 3 for file download purpose
/// <reference types="cypress-downloadfile"/>   
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
  
  it('download ppt', () => {
    cy.downloadFile('https://www.unm.edu/~unmvclib/powerpoint/pptexamples.ppt','Downloaded Slide', 'Ibraz.ppt').wait(10000) // I gave it extra time to download
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','Downloaded Images','nice.jpeg')
  })
})