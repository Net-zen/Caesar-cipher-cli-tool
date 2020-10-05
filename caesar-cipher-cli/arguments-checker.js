const fs = require('fs')
const path = require('path')

const errorHandler = require('./error-handler')

const argumentsChecker = async arguments => {
  const {action, shift, input, output} = arguments

  if (input !== undefined) {
    try {
      await fs.promises.access(path.resolve(__dirname, input))
    } catch (err) {
      errorHandler(new Error('Input file does not exist!'))
    }
  }

  if (output !== undefined) {
    try {
      await fs.promises.access(path.resolve(__dirname, output))
    } catch (err) {
      errorHandler(new Error('Output file does not exist!'))
    }
  }

  if (!action) {
    await errorHandler(new Error('action parameter is required!'))
  }

  if (!(action === 'encode' || action === 'decode')) {
    await errorHandler(new Error('action must be "encode" or "decode"'))
  }

  if (shift === undefined) {
    await errorHandler(new Error('shift parameter is required!'))
  }

  if (!Number.isInteger(shift)) {
    await errorHandler(new Error('shift must be integer!'))
  }
}

module.exports = argumentsChecker
