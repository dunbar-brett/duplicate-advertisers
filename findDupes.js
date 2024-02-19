const fuzz = require('fuzzball');

// Function to remove special characters from the name and convert it to lowercase.
function preprocessName(name) {
    return name.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase();
}

// Function to find potential duplicates in the list of advertisers.
function findDuplicates(advertisers) {
    const potentialDuplicates = {};

    for (let i = 0; i < advertisers.length; i++) {
        const name1 = preprocessName(advertisers[i]);

        for (let j = i + 1; j < advertisers.length; j++) {
            const name2 = preprocessName(advertisers[j]);
            
            // Compare the two names and get a fuzzy matching score
            const similarity = fuzz.ratio(name1, name2);
            if (similarity > 90) {
                if (!potentialDuplicates[name1]) {
                    potentialDuplicates[name1] = [advertisers[i]];
                }
                potentialDuplicates[name1].push(advertisers[j]);
            }
        }
    }

    return potentialDuplicates;
}

module.exports = {
    findDuplicates
};