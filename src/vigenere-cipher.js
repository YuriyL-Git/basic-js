const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    let tempKey = []
    let keyCharCode = ''
    let result = []

    for (const c of message) {
      if (tempKey.length === 0) tempKey = Array.from(key.toUpperCase())
      if (isLetter(c)) keyCharCode = tempKey.shift().charCodeAt(0)

      let messageCharCode = c.toUpperCase().charCodeAt(0)
      let resultCharCode = (messageCharCode - (90 % keyCharCode + 1))
      if (resultCharCode < 65) resultCharCode += 26
      if (!isLetter(c)) resultCharCode = c.charCodeAt(0)

      result.push(String.fromCharCode(resultCharCode))
    }

    return this.direct ? result.join('') : result.reverse().join('')
  }


  decrypt(message, key) {
    let tempKey = []
    let keyCharCode = ''
    let result = []

    for (const c of message) {
      if (tempKey.length === 0) tempKey = Array.from(key.toUpperCase())
      if (isLetter(c)) keyCharCode = tempKey.shift().charCodeAt(0)

      let cryptCharCode = c.toUpperCase().charCodeAt(0)
      let resultCharCode = (cryptCharCode + (90 % keyCharCode + 1))
      if (resultCharCode > 90) resultCharCode -= 26
      if (!isLetter(c)) resultCharCode = c.charCodeAt(0)

      result.push(String.fromCharCode(resultCharCode))
    }

    return this.direct ? result.join('') : result.reverse().join('')
  }
}

function isLetter(c) {
  return c.toUpperCase() !== c.toLowerCase()
}

module.exports = VigenereCipheringMachine;












