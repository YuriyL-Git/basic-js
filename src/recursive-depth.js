const CustomError = require("../extensions/custom-error");

module.exports =
    class DepthCalculator {
      calculateDepth(array) {
        if (!Array.isArray(array)) return 0
        if ((array).length === 0) return 1
        return Math.max(...array.map(a => this.calculateDepth(a))) + 1
      }
    }
