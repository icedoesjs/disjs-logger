const logger = require('disjs-logger');
const console = new logger('C:\\Users\\Username\\ProjectDirectory\\logfile.txt');
// Error Logging 
console.log("My error here", "error", __filename, `There was an error, please check the log file`)
