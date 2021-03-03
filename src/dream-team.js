const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) return false
    let out = ''
    members.forEach(m => {
            if (typeof m === 'string') out += m.trim()[0]
        }
    )
    return out.toUpperCase().split('').sort().join('')
};
