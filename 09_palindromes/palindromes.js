const palindromes = function (phrase) {
    let FIRST_UTF = 97;
    let LAST_UTF = 122;

    // We first make the phrase lowercase, for simplicity's sake.
    let newPhrase = phrase.toLowerCase();

    // We create an alphabet array. With UTF-16 codes we create an array of all lowercase letters.
    let alphabetArray = [];
    for (let i = FIRST_UTF; i <= LAST_UTF; i++) {
        alphabetArray.push(String.fromCharCode(i));
    }

    // The alphabet must also include numbers.
    for (let i = 0; i < 10; i++) {
        alphabetArray.push(i.toString());
    }

    // Aight, alphabet created.

    // We first strip the original phrase of all punctuation and spaces.
    let stripped = '';
    for (let i = 0; i < phrase.length; i++) {
        if (!alphabetArray.includes(newPhrase[i])) {
            continue;
        } else {
            stripped += newPhrase[i];
        }
    }

    // Okay, stripped the phrase. We now invert it.
    let inverted = '';
    for (let i = stripped.length - 1; i >= 0; i--) {
        inverted += stripped[i];
    }

    // And now to check if right way and inverted match up.
    if (inverted === stripped) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
