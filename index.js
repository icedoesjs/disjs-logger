const chalk = require('chalk');
const { join } = require('path');
const { appendFileSync } = require('fs');
const moment = require('moment');
const time = `[${moment().format("MM-DD-YYYY HH:mm")}]`;

class DJSLogger {
    constructor(logpath) {
        this.logpath = join(logpath);
        this.error = `${time} ` + chalk.bgRed(`ERROR`);
        this.normal = `${time} ` + chalk.bgBlue(`LOG`);
        this.warn = `${time} ` + chalk.bgYellow(`WARN`);
        this.debug = `${time} ` + chalk.bgGrey(`DEBUG`);
        this.ready = `${time} ` + chalk.bgGreen(`READY`);
        this.success = `${time} ` + chalk.bgGreen(`SUCCESS`);
        this.perms = `${time} ` + chalk.bgMagenta(`PERMISSION`)
        this.nodeexc = `${time} ` + chalk.bgRedBright(`UNCAUGHT EXCEPTION`);
        this.noderejc = `${time} ` + chalk.bgRedBright(`UNHANDLED REJECTION`);
        this.custom = `${time} ` + chalk.bgBlue(`PLACEHOLDER`);
        this.types = ["error", "log", "warn", "debug", "ready", "success", "perms", "nodeexc", "noderejc"];
        this.logfile = true;
    }

    async log(content, type = "log", path = "Unknown", mtd) {
        mtd = " " + mtd
        if (!this.types.includes(type.toLowerCase())) {
            this.custom = this.custom.replace("PLACEHOLDER", type.toLocaleUpperCase());
            type = this.custom;
        }
        if (content.toString().includes("Cannot send messages to this user")) {
            console.log(this.perms + "Cannot send message to this user.");
            if (this.logfile) {
                this.invokeLog(path, type, content, time)
            }
        }
        if (content.toString().includes("Missing Permissions")) {
            console.log(this.perms + "Missing permissions to execute an action.");
            if (this.logFile) {
                this.invokeLog(path, type, content, time)
            }
        }

        if (type == this.custom) {
            this.invokeLog(path, type, content, time)
            return console.log(this.custom + mtd);
        }

        switch(type.toLowerCase()) {
            case "log": 
            {
                this.invokeLog(path, type, content, time)
                return console.log(this.normal + mtd)
            }
            case "warn": 
            {
                this.invokeLog(path, type, content, time)
                return console.log(this.warn + mtd)
            }
            case "error": 
            {
                this.invokeLog(path, type, content, time)
                return console.log(this.error + mtd)
            }
            case "debug": 
            {
                this.invokeLog(path, type, content, time)
                return console.log(this.debug + mtd)
            }
            case "ready": 
            {
                this.invokeLog(path, type, content, time)
                return console.log(this.ready + mtd)
            }
            case "success": 
            {
                this.invokeLog(path, type, content, time)
                return console.log(this.success + mtd);
            }
            case "perms": {
                this.invokeLog(path, type, content, time)
                return console.log(this.perms + mtd);
            }
            case "nodeexc": {
                this.invokeLog(path, type, content, time)
                return console.log(this.nodeexc + mtd);
            }
            case "noderejc": {
                this.invokeLog(path, type, content, time)
                return console.log(this.noderejc + mtd)
            }
            default: throw new TypeError(`Logger type must be specified or otherwise declared [error, log, warn, debug, ready, success, perms, nodeexc, noderejc]`)
        }
    }
    async invokeLog(type, path, content) {
        const logObj = {
            "path": path,
            "type": type,
            "message": content,
            "time": `${moment().format("MM-DD-YYYY HH:mm")}`
        }

        switch(type) {
            case "error":
                {
                    return appendFileSync(this.logpath, JSON.stringify(logObj) + "\n----------- END LOG ------\n\n", (e) => {
                        throw e;
                    })
                }
            case "normal": {
                return appendFileSync(this.logpath, JSON.stringify(logObj) + "\n----------- END LOG ------\n\n", (e) => {
                    throw e;
                })
            }
            case "nodeexc": {
                return appendFileSync(this.logpath, JSON.stringify(logObj) + "\n----------- END LOG ------\n\n", (e) => {
                    throw e;
                })
            }
            case "noderejc": {
                return appendFileSync(this.logpath, JSON.stringify(logObj)+ "\n----------- END LOG ------\n\n", (e) => {
                    throw e;
                })
            }
            default: 
            return appendFileSync(this.logpath, JSON.stringify(logObj) + "\n----------- END LOG ------\n\n", (e) => {
                throw e;
            })
        }
    }
}

module.exports = DJSLogger
