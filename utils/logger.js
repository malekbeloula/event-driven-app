const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs/eventLogs.txt');

const logEvent = (event, data) => {
    const logMessage = `[${new Date().toISOString()}] EVENT: ${event}, Data: ${JSON.stringify(data)}\n`;
    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) console.error('Error writing to log file:', err);
    });
};

module.exports = { logEvent };
