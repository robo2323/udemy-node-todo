const encodedAddress = encodeURIComponent('wareemba, australia');
const url = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBW9MkinNsa0YbNZo_4SYrWFCo5rGswrMs&address=wareemba`;

fetch(url, {"content-type": "application/json"}).then(function(response) {
  console.log(response.body);
});
