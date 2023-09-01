const sumAll = function(start, end) {
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    let check = start + end; // General Gauss' formula.
    let count = (end - start) + 1;
    if (typeof(check) != 'number' || start < 0 || end < 0) {
        return "ERROR";
    } else {
        return check * count / 2;
    }
};

// Do not edit below this line
module.exports = sumAll;
