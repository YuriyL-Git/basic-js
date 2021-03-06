const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: '',
  getLength() {
    return this.chain.split(' )~~( ').length;
  },
  addLink(value) {
    let res = this.chain.split(' )~~( ')
    if (this.chain === '') res = []
    if (typeof value === 'undefined') value = ' '
    res.push(String(value))
    this.chain = res.join(' )~~( ')
    return this
  },

  removeLink(position) {
   // if (typeof position !== 'number') throw new Error
    let res = this.chain.split(' )~~( ')
    if (position < 0 || position > res.length - 1 || typeof position !== 'number'){
      this.chain = ''
      throw new Error
    }
    res.splice(position-1, 1)
    this.chain = res.join(' )~~( ')
    return this
  },

  reverseChain() {
    let res = this.chain.split(' )~~( ')
    res.reverse()
    this.chain = res.join(' )~~( ')
    return this
  },

  finishChain() {
    let result = ''
    if (this.chain.length > 0) result = '( ' + this.chain + ' )'
    this.chain = ''
    return result
  }
};

module.exports = chainMaker;