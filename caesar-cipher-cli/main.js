const { pipeline } = require('stream')
const path = require('path')
const argumentsChecker = require('./arguments-checker')
const { makeReadStream, makeTransformStream, makeWriteStream } = require('./streams')

const main = async arguments => {
  await argumentsChecker(arguments)

  const inputFile = 'input' in arguments && path.resolve(__dirname, arguments.input)
  const outputFile = 'output' in arguments && path.resolve(__dirname, arguments.output)


  pipeline(
    makeReadStream(inputFile),
    makeTransformStream(arguments.shift, arguments.action),
    makeWriteStream(outputFile),
    (err) => err && console.error(err)
  )
}

module.exports = main
