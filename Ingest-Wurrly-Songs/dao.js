const logger = require('./logger');
const sqlite3 = require('sqlite3').verbose();
const Promise = require('bluebird');

class AppDAO {
    constructor() {
        this.db = new sqlite3.Database(':memory:', (err) => {
            if (err) {
                logger.fatal(err.message);
                return;
            }
            logger.info('Connected to the in-memory SQlite database.');
        });
    }

    run(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.run(sql, params, function (err) {
                if (err) {
                    logger.error('Error running sql ' + sql)
                    logger.error(err)
                    reject(err)
                } else {
                    resolve({ id: this.lastID })
                }
            })
        });
    }

    get(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.get(sql, params, (err, result) => {
                if(err) {
                    logger.error('Error running sql ' + sql);
                    logger.error(err);
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }

    close() {
        return new Promise((resolve, reject) => {
            this.db.close((err) => {
                if (err) {
                    logger.fatal(err.message);
                    reject(err);
                } else {
                    logger.info('Close the database connection.');
                    resolve()
                }
            });
        });
    }
}

module.exports = AppDAO;
