const fs = require('fs');
const findDuplicates = require('./findDupes');

const args = process.argv.slice(2);
let filename = '';

args.forEach(value => {
    if (value.split('=').length === 2) {
        let [key, val] = value.split('=');
        if (key === 'file') {
            filename = val;
        }
    }
});

// validate filename
if (!filename) {
    console.error('Error: No input file provided');
    return;
}

if (filename.split('.').pop() !== 'txt') {
    console.error('Error: File must be a .txt file');
    return;
}

// read file and process data
console.log('Reading file:', filename)
fs.readFile(filename, 'utf-8', (err, data) => {
    advertisers = data.split('\n').map(name => name.trim());
    
    console.log(`Found ${advertisers.length} advertisers...\n`);
    console.log('Finding potential duplicates...');
    
    let potentialDuplicates = findDuplicates.findDuplicates(advertisers);
    console.log(`Duplicate keys found: ${Object.keys(potentialDuplicates).length}\n`);

    // write potential duplicates to file
    console.log('Writing to output directory...');
    fs.writeFile('output/potential_duplicates.json', JSON.stringify(potentialDuplicates), (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        }
        console.log('Done!');
    });
});