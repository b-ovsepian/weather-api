const API_key = '090fc987cd5621140b25360d9b4c89d1';

export default {
  _city: ``,
  get city() {
    return this._city;
  },
  set city(newCity) {
    this._city = newCity;
  },
  async fetchWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this._city}&units=metric&lang=ru&appid=${API_key}`;
    const response = await fetch(url);
    return response.json();
  },
};
