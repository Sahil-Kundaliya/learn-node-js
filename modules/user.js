const event = require("events"); // used for working with events and creating event emitters

module.exports = class extends event.EventEmitter {
    constructor() {
        super();
    }
}