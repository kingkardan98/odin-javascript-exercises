const removeFromArray = function(array, ...args) { // ...args == *args for Python
    if (array.length === 0 || args.length === 0) { 
    } else {
        for (let i = 0; i < args.length; i++) {
            if (array.includes(args[i])) {
                let index = array.indexOf(args[i]); // Retrieve the element's index
                array.splice(index, 1); // Remove 1 element at index 'index'
            }
        }
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
