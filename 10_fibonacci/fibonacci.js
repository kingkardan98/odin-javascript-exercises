const fibonacci = function(num) {
    // I'll try my hand at some recursion. Let's see...
    // First, we convert any possible strings.
    if (typeof(num) === 'string') {
        num = Math.floor(num / 1); // This should typecast number.
    }

    // First two numbers are 1 and 1, so
    // Now that we've converted the number, we deal with strict equalities.
    // Firstly, the number must be positive.
    if (num <= 0) {
        return "OOPS";
    } else if (num === 1 || num === 2) {
        return 1;
    } else {
        return (fibonacci(num - 1) + fibonacci(num - 2));
    }
    // Aight, that should actually be it.
};

// Do not edit below this line
module.exports = fibonacci;
