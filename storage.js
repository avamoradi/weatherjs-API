class Storage {
  constructor() {
    this.lat;
    this.lon;
    this.defaultlat = 52.3667;
    this.defaultlon = 4.8945;
  }

  getLocationData() {
    if(localStorage.getItem('latitude') === null) {
      this.lat = this.defaultlat;
    } else {
      this.lat = localStorage.getItem('latitude');
    }

    if(localStorage.getItem('longitude') === null) {
      this.lon = this.defaultlon;
    } else {
      this.lon = localStorage.getItem('longitude');
    }

    return {
      lat : this.lat,
      lon : this.lon
    }
  }

  setLocationData(lat, lon) {
    localStorage.setItem('latitude', lat);
    localStorage.setItem('longitude', lon);
  }
}