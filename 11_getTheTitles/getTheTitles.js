const getTheTitles = function(books) {
    let titles = [];
    for (let i = 0; i < books.length; i++) {
        titles.push(books[i]['title']);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
