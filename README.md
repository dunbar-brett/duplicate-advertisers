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

    `npm run findDupes` - will process the large `advertisers.txt` file that was given (~10 minutes!)
    
    `npm run smallTest` - will process a smaller subset of the `advertisers.txt` file
    
    To process a different file, run the following command changing the `path/to/file.txt` to your filepath.

    `node index.js file=path/to/file.txt`

5. Read the output file

    After your file was processed the tool writes to a `JSON` file in the `output` directory. I suggest using your favorite `JSON` viewer tool to view it. I used [JSON Formatter](https://jsonformatter.org/json-viewer)

## If I was given more time...

1. First thing I would do is optimize the `findDuplicates` function. It's a brute force, quadradic time complexity, method. Comparing pairs of strings is painfully slow and finding a way to reduce redundant comparisons would improve the process a substantial amount.

2. I would add more options to the script. For example, adding an option to configure the `similarity ratio` would be pretty simple to implement and allow the user to find a ratio to get a list of duplicates they're satisfied with. At the moment it is set to 95%.

3. Unit tests would be another huge thing I would add. This was a pretty slow process to test with input files, which is why I created a smaller file to test. Adding unit tests would give me more confidence that the functions are running the way I expect them to. 

4. Finally, I wouldn't mind cleaning up and abstracting the code a bit more. Adding a `utils` file for reading and writing to files would be nice. I just like the idea of a clean `index.js` file that just handles the command line processing for the user.
