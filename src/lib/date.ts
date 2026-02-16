// date.ts

/**
 * Returns the current date and time in UTC format.
 * @returns {string} The current date and time in YYYY-MM-DD HH:MM:SS format.
 */
function getCurrentDateTimeUTC() {
    const now = new Date();
    return now.toISOString().replace('T', ' ').substring(0, 19);
}

/**
 * Formats a given date into YYYY-MM-DD HH:MM:SS format.
 * @param {Date} date - The date to format.
 * @returns {string} The formatted date string.
 */
function formatDate(date) {
    return date.toISOString().replace('T', ' ').substring(0, 19);
}

/**
 * Parses a date string in YYYY-MM-DD format and returns a Date object.
 * @param {string} dateString - The date string to parse.
 * @returns {Date} The parsed Date object.
 */
function parseDate(dateString) {
    return new Date(dateString + 'T00:00:00Z');
}

/**
 * Adds a specified number of days to a given date.
 * @param {Date} date - The original date.
 * @param {number} days - The number of days to add.
 * @returns {Date} The new date after addition.
 */
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export {
    getCurrentDateTimeUTC,
    formatDate,
    parseDate,
    addDays,
};
