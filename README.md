# Duplicate Advertiser Tool

This is a simple Node.js project that takes an input file that contains a list of advertiser names and checks for duplicates. It uses [Fuzzball](https://www.npmjs.com/package/fuzzball) to produce a fuzzy match ratio then writes to a json file containing the key of each matched name with the duplicate values. 

## Installation Method
1. Clone the repo

    `git clone https://github.com/dunbar-brett/duplicate-advertisers.git`
2. Cd into the directory

    `cd duplicate-advertisers`
3. Install node modules

    `npm i`
4. Process an input file

    `npm run findDupes` - will process the large `advertisers.txt` file that was given
    
    `npm run smallTest` - will process a smaller subset of the `advertisers.txt` file
    
    To run a different file run the following command changing the `path/to/file.txt` to your filepath.
    `node index.js file=path/to/file.txt`
    

