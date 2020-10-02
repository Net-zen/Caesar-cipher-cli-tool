const fs = require('fs')
const {pipeline} = require('stream')
const path = require('path')

const {arguments} = require('./console')
const {argumentsChecker} = require('./console')
const {encrypt} = require('./encryptor')

console.log('Press CTRL + C to exit');

process.on('SIGINT', function () {
  console.log("Caught interrupt signal")
  process.exit()
})
const main = async arguments => {
  await argumentsChecker(arguments)

  const inputFile = 'input' in arguments && path.join(__dirname, arguments.input)
  const outputFile = 'output' in arguments && path.join(__dirname, arguments.output)


  pipeline(
    inputFile ? fs.createReadStream(inputFile, 'utf8') : process.stdin,
    encrypt,
    outputFile ? fs.createWriteStream(outputFile, {flags: 'a', encoding: `utf8`}) : process.stdout,
    (err) => err && console.error(err)
  )
}

main(arguments)

