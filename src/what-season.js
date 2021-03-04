const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date) return 'Unable to determine the time of year!'

    const seasons = [{season: 'winter', months: ['Dec', 'Jan', 'Feb']},
        {season: 'spring', months: ['Mar', 'Apr', 'May']},
        {season: 'summer', months: ['Jun', 'Jul', 'Aug']},
        {season: 'autumn', months: ['Sep', 'Oct', 'Nov']}
    ]

    const month = date.toLocaleString('en', {month: 'short'});
    return seasons.filter(s => s.months.includes(month)).shift().season
};