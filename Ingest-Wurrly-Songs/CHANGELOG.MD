# Change Log
All notable changes to this project will be documented in this file.

This project closely adheres to [Semantic Versioning](http://semver.org/).

## 0.7.0 - 5th Jan 2018
#### Added
* On the fly test cases
* RepositoryTests

## 0.6.0 - 4th Jan 2018
#### Added
* main
 - `create artist table`
 - `create song table`
 - `save `songs`

## 0.5.0 - 3rd Jan 2018
#### Added
* `ArtistRespository`
 - `CREATE TABLE artists`
* `SongRespository`
 - `CREATE TABLE songs`

## 0.4.0 - 3rd Jan 2018
#### Added
* `sqlite3` in-memory database
* `bluebird`
* `AppDAO`
 - `run`: used to create or alter tables and to insert or update table data
 - `get`: select a single row of data from one or more tables

## 0.3.0 - 3rd Jan 2018
#### Added
* `models`
  - `Artist`
     - `id`
     - `name`
  - `Song`
     - `id`
     -`title`
     -`artist`
     - `artist`
     - `imagepath`
     - `available`
     - `wurrlyCount`

## 0.2.0 - 2nd Jan 2018
#### Added
* `.env`
* `axios` to make `http requests`
* RESTful controllers
    - `/process.env.SONGS_DATA_URL`
      - `GET`: `items`
* `bunyan Logger`

## 0.1.0 - 2nd Jan 2018
#### Added
* `package.json`
* added dir structure using `mkdir -p Ingest-Wurrly-Songs
* added npm dependencies

<!--
All change log may contain one of the following tag
SAMPLE CHANGE LOG!
#### Added
*
 *


#### Updated
*
 *


#### Changed
*
 *


#### Fixed
*
 *


#### Removed
*
 *
-->
