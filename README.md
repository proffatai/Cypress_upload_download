## Setting up file-upload functionality
step 1 Firstly, install the plugin: `npm install --save-dev cypress-file-upload`

step 2 If you are using typescript, you have to ensure you visit tsconfig.json, then inside compilerOptions, locate "types": and add the new plugun as shown => "types": ["cypress","cypress-file-upload"]


step 3a Now, move to the command.js file inside the support folder and add this command to the last line in the file: `import 'cypress-file-upload'; `

step 3b Also add the command `import 'cypress-file-upload';`  to the support/e2e.js file

## File upload in action

We need to get the selector of the upload button, e.g cy.get('#myfile').attachFile('Loc_of_file') ##

Note, if the file (image, document, mp3, any file) is already present inside the fixtures folder, we only need to enter the file name as the location of the file. Otherwise, we need to provide the path to the file.

ALWAYS PUT THE FILE TO UPLOAD INSIDE THE FIXTURES FOLDER

## File download
