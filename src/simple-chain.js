const CustomError = require("../extensions/custom-error");

const chainMaker = {
  res: [],

  getLength() {
    return this.res.length;
  },

  addLink(value) {
    if (typeof value === 'undefined') value = ' '
    this.res.push(String(value))
    return this
  },

  removeLink(position) {
    if (position < 0 || position > this.res.length - 1 || typeof position !== 'number') {
      this.res = []
      throw new Error
    }
    this.res.splice(position - 1, 1)
    return this
  },

  reverseChain() {
    this.res.reverse()
    return this
  },

  finishChain() {
    let result = ''
    if (this.res.length > 0) result = '( ' + this.res.join(' )~~( ') + ' )'
    this.res = []
    return result
  }
};

module.exports = chainMaker;