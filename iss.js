const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api6.ipify.org/?format=json', (error, response, body) => {
    if (error) {
      return callback(error, null);
    } if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      const ip = JSON.parse(body).ip;
      if (ip) {
        callback(null, ip);
      } else {
        callback("error on IP address", null);
      }
    }
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`https://ipvigilante.com/json/${ip}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    } if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for ip. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } else {
      const longitude = JSON.parse(body).data.longitude;
      const latitude = JSON.parse(body).data.latitude;
      const object = {
        longitude,
        latitude
      };
      if (object) {
        callback(null, object);
      } else {
        callback("error on IP address", null);
      }
    }

  });
};


module.exports = {
  fetchMyIP,
  fetchCoordsByIP
};
