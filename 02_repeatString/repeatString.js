const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let new_string = '';
    for (let i = 0; i < num; i++) {
        new_string = new_string + string;
    }
    return new_string;
};

// Do not edit below this line
module.exports = repeatString;
