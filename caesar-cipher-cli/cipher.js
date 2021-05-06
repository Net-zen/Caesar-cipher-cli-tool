const { program } = require('commander')

const main = require('./main')


console.log('Press CTRL + C to exit')
process.on('SIGINT',  () => {
  console.log('Caught interrupt signal. Good bye!')
  process.exit()
})


program
  .storeOptionsAsProperties(false)
  .passCommandToAction(false)
  .option('-s, --shift <shift>')
  .option('-i, --input <input>')
  .option('-o, --output <output>')
  .option('-a, --action <action>')

program.parse(process.argv)
const arguments = program.opts()
arguments.shift = arguments.shift && Number(arguments.shift)
arguments.action = arguments.action && arguments.action.toLowerCase()


main(arguments)

