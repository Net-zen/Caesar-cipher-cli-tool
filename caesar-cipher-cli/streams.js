const { Transform } = require('stream')
const fs = require('fs')

const encryptor = require('./encryptor')

const makeTransformStream = (shift, action) => {
  return new Transform({
    transform(chunk, encoding, cb) {
      this.push(encryptor(chunk.toString(), shift, action))
      cb()
    }
  })
}

const makeReadStream = inputFile =>
  inputFile ? fs.createReadStream(inputFile, 'utf8')
            : process.stdin

const makeWriteStream = outputFile =>
    outputFile ? fs.createWriteStream(outputFile, {flags: 'a', encoding: `utf8`})
               : process.stdout

module.exports = {makeReadStream,
                  makeTransformStream,
                  makeWriteStream}
