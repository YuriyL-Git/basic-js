const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) return false
    let out = []
    members.forEach(m => {
        if (typeof m === 'string') out.push(m.trim().charAt(0).toUpperCase())
    })
    return out.sort().join('')
};
