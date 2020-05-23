const moment = require.requireActual('moment');

export default (timeStamp = 0) => {
    console.log('Inside moment');
    return moment(timeStamp);
};