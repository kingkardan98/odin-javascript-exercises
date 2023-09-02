const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();

    // The result must be an object.
    let oldest = {};
    let maxAge = 0;

    // We iterate over the array of people.
    for (let i = 0; i < people.length; i++) {
        let birth = people[i]['yearOfBirth'];
        let death = 0;

        // If yearOfDeath is undefined, we just set it to current year.
        if (people[i]['yearOfDeath'] === undefined) {
            death = currentYear;
        } else {
            death = people[i]['yearOfDeath'];
        }

        // We simply create an age attribute for the person.
        people[i]['age'] = death - birth;
    }

    // Now every person has an age associated with them.
    // We now iterate over every person, and look for ages and updating the name of the
    // currently oldest person.
    for (let i = 0; i < people.length; i++) {
        if (people[i]['age'] > maxAge) {
            maxAge = people[i]['age'];
            oldest = people[i];
        }
    }

    // Done.
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
