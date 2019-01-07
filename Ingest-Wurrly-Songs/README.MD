Ingest Wurrly Songs
---

## Project Overview
1. Data
● The following JSON file provides the data for this project:
○ https://s3-us-west-2.amazonaws.com/wurrly-data/test/songs.json
● Create a SQL schema that fits the data

● Application ingests the JSON files and populates an SQL
compliant in-memory database with the data in the files

## Installation

### Prerequisites

- Mac OS X Sierra or higher
- Node 10 or higher

#### Node

Installed node using brew.
```bash
brew install node
```
> If already installed, you can upgrade node `brew upgrade node`.

### Dependencies

Run the command
```bash
npm install
```
This should install all the dependencies for the project.

### Environment

The project should already have a .env file which contains the URL.

### Memory Database

Make sure sqlite3 module is installed

### Testing

```bash
mocha test
```
```should see something output:
repository
    daos
{"name":"ingest-wurrly-songs","hostname":"Sridhars-MacBook-Pro.local","pid":72045,"level":30,"msg":"Connected to the in-memory SQlite database.","time":"2019-01-05T22:19:58.368Z","v":0}
```

### Running Server

npm start

### Logging
 I used bunyan for logging. For clearer logging outputs, use the [bunyan CLI](https://github.com/trentm/node-bunyan#cli-usage).


## Contributors
* Sridhar Gudur

## References
* [sqlite3](https://www.npmjs.com/package/sqlite3)
* [A SQLite Tutorial with Node.js](https://stackabuse.com/a-sqlite-tutorial-with-node-js/)
