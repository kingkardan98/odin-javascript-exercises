const leapYears = function(year) {
    let isFour = year % 4 == 0;
    let isHundred = year % 100 == 0;
    let is400 = year % 400 == 0;
    if (isFour && !isHundred || is400) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
