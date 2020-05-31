const storage = new Storage();

const weatherLocation = storage.getLocationData();


const weather = new Weather(weatherLocation.lat, weatherLocation.lon);

const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

//change location event
document.getElementById('w-change-btn').addEventListener
('click', (e) => {
  const lat = document.getElementById('latitude').value;
  const lon = document.getElementById('longitude').value;

  weather.changeLocation(lat, lon);

  storage.setLocationData(lat, lon);
   
  getWeather();

  $('#locModal').modal('hide');
});

function getWeather(){
  weather.getWeather()
   .then(resault => {
     ui.paint(resault);
   })
  .catch(err => console.log(err));
}
