const API_key = '090fc987cd5621140b25360d9b4c89d1';

export default {
  _city: ``,
  _lat: 0,
  _lon: 0,
  zoom: 100,
  get city() {
    return this._city;
  },
  set city(newCity) {
    this._city = newCity;
  },
  set lat(newLat) {
    this._lat = newLat;
  },
  set lon(newLon) {
    this._lon = newLon;
  },
  async fetchWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this._city}&units=metric&lang=ru&appid=${API_key}`;
    const response = await fetch(url);
    return response.json();
  },
  async fetchWeatherByLoc() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this._lat}&lon=${this._lon}&units=metric&lang=ru&appid=${API_key}`;
    const response = await fetch(url);
    return response.json();
  },
  async fetchWeatherMap() {
    const url = `https://tile.openweathermap.org/map/clouds_new/${this.zoom}/${this._lat}/${this._lon}.png?appid=${API_key}`;
    const response = await fetch(url);
    return response.text();
  },
  async fetchWeatherHourly() {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${this._lat}&lon=${this._lon}&units=metric&lang=ru&appid=${API_key}`;
    const response = await fetch(url);
    return response.json();
  },
};
