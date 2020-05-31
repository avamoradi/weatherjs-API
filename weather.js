class Weather {
  constructor(lat, lon) {
    this.apiKey = '9e52ed5881f7a6e864a48667871d1136';
      this.lat = lat;
      this.lon = lon;
  }

  async getWeather(){
    const response = await fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&units=metric&exclude=hourly,daily&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
  }

  changeLocation(lat, lon) {
    this.lat = lat;
    this.lon = lon;
  }
}