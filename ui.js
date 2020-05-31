class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    //this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint= document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.timezone;
    this.desc.textContent = ` ${weather.current.weather[0].description}`;
    this.string.textContent = weather.current.temp +  ' °C';
    //this.icon.textContent = weather.current.weather.icon;
    this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.current.feels_like} 
    °C`;
    this.dewpoint.textContent = `DewPoint: ${weather.current.dew_point}`;
    this.wind.textContent = `Wind Speed: ${weather.current.wind_speed}`;
  }
}