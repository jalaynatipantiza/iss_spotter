// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');
 
// fetchCoordsByIP('71.17.109.97', (error, data) => {
//   console.log(error);
//   console.log(data);
// });
// // fetchMyIP((error, ip) => {
// //   if (error) {
// //     console.log("It didn't work!" , error);
// //     return;
// //   }

// //   console.log('It worked! Returned IP:' , ip);
// // });

// fetchISSFlyOverTimes({ longitude: '-106.72350', latitude: '52.11330' }, (error, data) => {
//   console.log(error);
//   console.log(data);
// });

nextISSTimesForMyLocation((error, passTime) => {
  if (error) {
    return console.log('It didn\'t work!', error);
  }
  for (let element of passTime) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(element.risetime);
    const duration = element.duration;
    console.log(`Next pass at ${datetime} for ${duration}`);
  }
});