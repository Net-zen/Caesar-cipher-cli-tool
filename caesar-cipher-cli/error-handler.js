const errorHandler = error => {
  process.stderr.write(error.message + '\n')
  process.exit(1)
}

module.exports = errorHandler
