const {program} = require('commander')

program
  .storeOptionsAsProperties(false)
  .passCommandToAction(false)
  .option('-s, --shift <shift>')
  .option('-i, --input <input>')
  .option('-o, --output <output>')
  .option('-a, --action <action>')

program.parse(process.argv)
const arguments = program.opts()
arguments.shift = Number(arguments.shift)
arguments.action = arguments.action.toLowerCase()

const fs = require('fs')
const path = require('path')

const {errorHandler} = require('./error-handler')

const argumentsChecker = async arguments => {
  const {action, shift, input, output} = arguments

  if (input !== undefined) {
    // await fs.access(path.join(__dirname, input), (err) => {
    //   err && errorHandler(new Error('Input file not exist!'))
    // })
    try {
      await fs.promises.access(path.join(__dirname, output))
    } catch (err) {
      errorHandler(new Error('Output file not exist!'))
    }
  }

  if (output !== undefined) {
  //   await fs.access(path.join(__dirname, output),  (err) => {
  //     err && errorHandler(new Error('Output file not exist!'))
  //   })
    try {
      await fs.promises.access(path.join(__dirname, output))
    } catch (err) {
      errorHandler(new Error('Output file not exist!'))
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

module.exports = {
  arguments,
  argumentsChecker
}
