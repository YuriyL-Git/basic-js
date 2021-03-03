const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== 'string') return false
    let input = parseFloat(sampleActivity)
    if (input<=0 || input>=15) return false
    if (!input) return false;
    return Math.ceil((Math.log(MODERN_ACTIVITY / input)) / (Math.log(2) / HALF_LIFE_PERIOD));
};

let inp = 11;
let p = 4



