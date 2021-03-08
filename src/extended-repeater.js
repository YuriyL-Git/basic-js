const CustomError = require("../extensions/custom-error");

module.exports =
    function repeater(str, options) {
      options.separator = options.separator || '+'
      options.additionSeparator = options.additionSeparator || '|'
      options.repeatTimes = options.repeatTimes || 1
      options.additionRepeatTimes = options.additionRepeatTimes || 1

      if (typeof options.addition !== 'undefined') {
        options.addition = String(options.addition)
      } else {
        options.addition = ''
      }

      let res = String(str)
      res += (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes)
      res = res.substr(0, res.lastIndexOf(options.additionSeparator))
      res = (res + options.separator).repeat(options.repeatTimes)
      res = res.substr(0, res.lastIndexOf(options.separator))

      return res
    }
