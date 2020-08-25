const glob = require("glob")
const fs = require("fs")

const envFiles = glob.sync(".env*")

if (envFiles.length === 0) {
  envFiles.push(".env")
}

const writeToEnvFiles = (name, value) => {
  try {
    envFiles.forEach((file) => {
      fs.appendFileSync(file, `${name}=${value}\n`)
    })
  } catch (e) {
    throw new Error(e)
  }
}

module.exports = {
  writeToEnvFiles,
}
