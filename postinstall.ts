import * as fs from 'fs'

//Read package.json file
const packageJsonPath = './package.json'
const packageJson = require(packageJsonPath)

//Execute npx husky install
const { execSync } = require('child_process')
execSync('npx husky install')

// Delete postinstall in scripts
delete packageJson.scripts.postinstall

//Save the modified package.json back to the file
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))

console.log(
  'postinstall is complete, npx husky install has been executed and the postinstall directive has been deleted. ',
)

// Delete the postinstall.ts file itself
const currentScriptPath = './postinstall.ts'
fs.unlinkSync(currentScriptPath)

console.log('postinstall.ts file has been deleted.')
