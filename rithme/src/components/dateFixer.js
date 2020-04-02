module.exports = {
  dateFix(dateTime) {
    let eventDay = dateTime.slice(0, 10);
    const arrayToFix = eventDay.split("-");

    eventDay = `${arrayToFix[2]}/${arrayToFix[1]}/${arrayToFix[0]} `;
    return eventDay;
  },
  timeFix(dateTime) {
    const eventTime = dateTime.slice(11, 16);
    return eventTime;
  }
};
