
const { nextISSTimesForMyLocation } = require('./iss_promised')


  nextISSTimesForMyLocation()
  .then((passTime) => {
    for (let element of passTime) {
      const datetime = new Date(0);
      datetime.setUTCSeconds(element.risetime);
      const duration = element.duration;
      console.log(`Next pass at ${datetime} for ${duration}`);
    }
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });





