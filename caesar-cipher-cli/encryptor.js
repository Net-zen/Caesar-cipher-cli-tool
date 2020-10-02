const {Transform} = require('stream')

const {arguments} = require('./console')

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

const encrypt = new Transform({
  transform(chunk, enc, callback) {
    callback(null,  encryptor(chunk.toString()))
  }
})

const encryptor = (data) => {
  let {action, shift} = arguments

  if (Math.abs(shift) > alphabet.length) {
    shift = Math.abs(shift) % alphabet.length
  }

  if (action.toLowerCase() === 'decode') {
    shift = shift * -1
  }

  return data.toString().split('').map(element => {
    if (alphabet.indexOf(element) >= 0) {
      const idx = alphabet.indexOf(element)
      const codedIdx = (idx + shift) % alphabet.length
      return codedIdx >= 0 ? alphabet[codedIdx] : alphabet[codedIdx + alphabet.length]
    } else if (alphabet.toUpperCase().indexOf(element) >= 0) {
      const idx = alphabet.toUpperCase().indexOf(element)
      const codedIdx = (idx + shift) % alphabet.length
      return codedIdx >= 0 ? alphabet[codedIdx].toUpperCase() : alphabet[codedIdx + alphabet.length].toUpperCase()
    }
    return element
  }).join('')
}


module.exports = {encrypt}
