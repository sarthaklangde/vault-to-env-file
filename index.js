const fs = require('fs')
const path = require('path')

const envRawObject = process.argv[2]
const envFileName = process.argv[3]
const envFilePath = process.argv[4]

// Parse the string to JSON
const envObject = JSON.parse(envRawObject)

// Get the storage location of the file
const storagePath = path.join(process.env.GITHUB_WORKSPACE, envFilePath, envFileName)

// Save the file to the root of the workspace
const writeStream = fs.createWriteStream(storagePath)

// Extract the keys to an array
const keys = Object.keys(envObject)

console.log(`Writing ${keys.length} keys to  ${storagePath}`)

// Loop over all the keys and write key and value to the file
console.log(`Added the following keys to file:`)
for (let i = 0; i < keys.length; i++) {
  const key = keys[i]
  console.log(key)
  const value = envObject[key]
  writeStream.write(`${key}=${value}\n`);
}

writeStream.end()