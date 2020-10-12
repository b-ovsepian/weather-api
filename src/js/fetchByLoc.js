const API_key = '090fc987cd5621140b25360d9b4c89d1';

export default {
  _lat: 0,
  _lon: 0,
  set lat(newLat) {
    this._lat = newLat;
  },
  set lon(newLon) {
    this._lon = newLon;
  },
  async fetchWeatherByLoc() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this._lat}&lon=${this._lon}&units=metric&lang=ru&appid=${API_key}`;
    const response = await fetch(url);
    return response.json();
  },
};
