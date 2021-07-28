<h1 align="center">Disjs Logger</h1>
<br></br>
<div align="center">
<p>
<a href="https://www.npmjs.com/package/dijs/logger"><img src="https://nodei.co/npm/disjs-logger.png?downloads=true&stars=true" alt="NPM Banner"></a>
</p>
</div>
<div align="center">
    <img src="https://iceyym8.dev/cdn/MMVeKZN.png">
    <br></br>
</div>

## 📜 Usage
```js
const dislogger = require('disjs-logger');
const logger = new logger('logfilename.txt');

logger.log("content", "type", __filename, "Message shown in console (MTD)");
```

## ✍ Arguements & Paramaters
* Content (STRING) - The content or error shown in the log file.
* Type (STRING) - The type of log, you can view the types below or input a custom type to use your own.
* Filename (STRING) - The file where the log was invoke, usually __filename.
* MTD (STRING) - The message to display in console when the log is invoked.
#### Types
* Error - This is when you have an error of course, like my code (RED)
* Log - The standard log (BLUE)
* Warn - Input when you have a warning (YELLOW)
* Debug - Standard debug for your projects (GREY)
* Ready - Made for djs bots just to use in your ready event (GREEN)
* Success - Like the ready type but for when something goes right (GREEN)
* Perms - For when you need to say you have no permission in console (MAGENTA)
* Nodeexc - This is just a standard Uncaught Exception but formatted (RED)
* Noderejc - Again a standard Unhandled Rejection but formatted (RED)
* Input a type other than these and it will still show, this is where the custom type comes in (Custom logs will always be blue)

## 📦 Dependencies 
* [Chalk](https://www.npmjs.com/package/chalk)
* [Moment](https://www.npmjs.com/package/moment)

## 📂 Examples
You can find all the examples in the file called [examples.js]([https://](https://github.com/iceyym8/disjs-logger/examples.js))



## 🧑 Contact
* [Discord](https://discord.gg/37a6wEh8t7)
* [Github](https://github.com/iceyym8)
* [Website](https://iceyym8.dev)

_Made with ♥ by [IceyyM8](https://iceyym8.dev)

