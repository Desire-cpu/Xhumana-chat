const moment = require('moment');


funtion formatMessage(username, text) {
    return {
        username,
        text,
        time: moment().format('h:mm a')
    }

}

module.exports = formatMessage;