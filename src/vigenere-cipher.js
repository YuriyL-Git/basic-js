const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }

  decrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

//module.exports = VigenereCipheringMachine;

function isLetter(c) {
  return c.toUpperCase() !== c.toLowerCase()
}

let message = 'Same length key'
let key = 'Samelengthkey'

function encrypt(message, key) {
  let tempKey = []
  let keyCharCode = ''
  let res = []

  for (const c of message) {
    if (tempKey.length === 0) tempKey = Array.from(key.toUpperCase())
    if (isLetter(c)) keyCharCode = tempKey.shift().charCodeAt(0)

    let messageCharCode = c.toUpperCase().charCodeAt(0)
    let resultCharCode = (messageCharCode - (90 % keyCharCode + 1))
    if (resultCharCode < 65) resultCharCode += 26
    if (!isLetter(c)) resultCharCode = c.charCodeAt(0)

    let resChar = String.fromCharCode(resultCharCode)
    res.push(resChar)
  }
  return res.join('')
}

encrypt(message, key)//?

function decrypt(message, key) {
  let tempKey = []
  let keyCharCode = ''
  let res = []

  for (const c of message) {
    if (tempKey.length === 0) tempKey = Array.from(key.toUpperCase())
    if (isLetter(c)) keyCharCode = tempKey.shift().charCodeAt(0)

    let cryptCharCode = c.toUpperCase().charCodeAt(0)
    let resultCharCode = (cryptCharCode + (90 % keyCharCode + 1))
    if (resultCharCode > 90) resultCharCode -= 26
    if (!isLetter(c)) resultCharCode = c.charCodeAt(0)

    let resChar = String.fromCharCode(resultCharCode)
    res.push(resChar)
  }
  return res.join('')
}

message = 'HSVD AJAL ^^'
key = 'behappy'

decrypt(message, key)//?










