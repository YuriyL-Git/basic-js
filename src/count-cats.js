const CustomError = require("../extensions/custom-error");

module.exports = function countCats(Array) {
    let res = 0
    for (let backYard of Array) {
        for (let c of backYard) {
            if (typeof c === 'string' && c === '^^') res++
        }
    }
    return res
};
