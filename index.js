const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
 
fetchCoordsByIP('71.17.109.97', (error, data) => {
  console.log(error);
  console.log(data);
});
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});
