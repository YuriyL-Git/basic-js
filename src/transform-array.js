const CustomError = require("../extensions/custom-error");

module.exports =
    function transform(arr) {
      if (!Array.isArray(arr)) throw new Error

      const res = []
      let lastElement = null
      const sequences = ['--double-prev', '--discard-prev', '--discard-next', '--double-next', 'done']

      arr.forEach(el => {
        switch (el) {

          case '--double-prev':
            if (sequences.includes(lastElement)) {
              lastElement = null
              break
            }
            if (res.length) res.push(lastElement)
            break

          case '--discard-prev':
            if (sequences.includes(lastElement)) break
            res.pop()
            break

          case '--discard-next':
          case '--double-next':
            lastElement = el
            break

          default:
            if (lastElement === '--discard-next') {
              lastElement = 'done'
              break
            }
            if (lastElement === '--double-next') res.push(el)
            lastElement = el
            res.push(el)
        }
      })
      return res
    };


