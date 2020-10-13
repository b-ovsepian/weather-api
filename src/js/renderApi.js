import refs from './refs.js';
import fetchApi from './fetchApi.js';
import itemTpl from '../templates/item.hbs';
import cityTpl from '../templates/city.hbs';
import hourlyTpl from '../templates/hourly.hbs';

import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css';

import { alert, notice, info, success, error } from '@pnotify/core';

//Показываем погоду
if (localStorage.getItem('currentCity')) {
  chooseShowCity();
} else WeatherBoxIsEmpty();

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  refs.weatherBox.innerHTML = '';
  fetchApi.city = event.currentTarget.query.value.trim();
  fetchApi.fetchWeather().then(data => {
    if (data.status === 200 || data.cod === 200) {
      addCityToFavourites(data);
      refs.form.reset();
    } else {
      showAlert();
      refs.form.reset();
    }
  });
});
refs.menu.addEventListener('click', () => {
  toggleMenu();
  showFavourites();
  if (!refs.formBox.classList.contains('is-open') && refs.cityList.innerHTML) {
    chooseShowCity();
  }
});
refs.cityList.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName === 'A') {
    const index = Number.parseInt(event.target.dataset.index) + 1;
    const currentCityLocal = localStorage.getItem(`favorite${index}`);
    localStorage.setItem('currentCity', currentCityLocal);
    chooseShowCity();
    toggleMenu();
  }

  if (event.target.nodeName === 'BUTTON') {
    const key = event.target.dataset.index;
    deleteFavoriteCity(key);
  }
});
refs.localBtn.addEventListener('click', event => {
  getCurrentPosition()
    .then(location => {
      const lat = location.coords.latitude;
      const lon = location.coords.longitude;
      fetchApi.lat = lat;
      fetchApi.lon = lon;
      fetchApi.fetchWeatherByLoc().then(data => {
        if (data.status === 200 || data.cod === 200) {
          addCityToFavourites(data);
        } else {
          showNoticeLoc();
        }
      });
    })
    .catch(err => {
      const API_key = 'dff7afe788c44b9e90e7b4fd64d0bb1b';
      const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_key}`;
      const fetchGeo = async function () {
        const response = await fetch(url);
        return response.json();
      };
      fetchGeo().then(response => {
        fetchApi.lat = Number.parseFloat(response.latitude);
        fetchApi.lon = Number.parseFloat(response.longitude);
        fetchApi.fetchWeatherByLoc().then(data => {
          if (data.status === 200 || data.cod === 200) {
            addCityToFavourites(data);
          } else {
            showNoticeLoc();
          }
        });
      });
    });
});
refs.todayBtn.addEventListener('click', event => {
  if (!refs.formBox.classList.contains('is-open')) {
    refs.weatherBox.classList.add('is-open');
    refs.hourlyBox.classList.remove('is-open');
  }
});
refs.hourlyBtn.addEventListener('click', event => {
  if (!refs.formBox.classList.contains('is-open')) {
    const localCity = JSON.parse(localStorage.getItem('currentCity'));
    fetchApi.lat = localCity.coord.lat;
    fetchApi.lon = localCity.coord.lon;
    fetchApi
      .fetchWeatherHourly()
      .then(({ hourly }) => hourly)
      .then(data =>
        data.filter((item, index) => {
          if (index < 24) {
            return item;
          }
        }),
      )
      .then(res => renderHourly(res));

    refs.weatherBox.classList.remove('is-open');
    refs.hourlyBox.classList.add('is-open');
  }
});

function render(data) {
  refs.weatherBox.innerHTML = '';
  const templateItem = itemTpl(data);
  refs.weatherBox.insertAdjacentHTML('beforeend', templateItem);
  const dateRef = document.querySelector('.js-td');
  let toDay = new Date(dateRef.textContent * 1000);
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };
  const localeUk = toDay.toLocaleString('Ru-ru', options);
  dateRef.textContent = `${localeUk}`;
  const tempArray = document.querySelectorAll('.js-temp');
  tempArray.forEach(
    (item, index) => (item.textContent = roundTemp(tempArray)[index] + '°'),
  );
  const timeMsArr = document.querySelectorAll('.js-time');
  timeMsArr.forEach(
    (item, index) => (item.textContent = convertTime(timeMsArr)[index]),
  );
  const windDir = document.querySelector('.js-wind');
  windDir.textContent = convertDir(windDir);
}
// round temp to int
function roundTemp(tempArray) {
  const roundTempsArr = [];
  tempArray.forEach(({ textContent }) => {
    roundTempsArr.push(Math.round(Number.parseFloat(textContent)));
  });
  return roundTempsArr;
}
// convert Unix to 2-dig
function convertTime(timeMsArr) {
  const convertedTimeArr = [];
  timeMsArr.forEach(({ textContent }) => {
    const time = new Date(Number.parseInt(textContent) * 1000);
    const options = {
      hour: '2-digit',
      minute: '2-digit',
    };
    const convertedTime = time.toLocaleTimeString('Ru-ru', options);
    convertedTimeArr.push(convertedTime);
  });
  return convertedTimeArr;
}
// Convert wind direction to words
function convertDir({ textContent }) {
  const degree = Number.parseInt(textContent);
  switch (true) {
    case degree === 0 || 360:
      return 'С';
    case degree > 0 && degree < 45:
      return 'ССВ';
    case degree === 45:
      return 'СВ';
    case degree > 45 && degree < 90:
      return 'ВСВ';
    case degree === 90:
      return 'В';
    case degree > 90 && degree < 135:
      return 'ВЮВ';
    case degree === 135:
      return 'ЮВ';
    case degree > 135 && degree < 180:
      return 'ЮЮВ';
    case degree === 180:
      return 'Ю';
    case degree > 180 && degree < 225:
      return 'ЮЮЗ';
    case degree === 225:
      return 'ЮЗ';
    case degree > 225 && degree < 270:
      return 'ЗЮЗ';
    case degree === 270:
      return 'З';
    case degree > 270 && degree < 315:
      return 'ЗСЗ';
    case degree === 315:
      return 'СЗ';
    case degree > 315 && (degree === 0 || 360):
      return 'ССЗ';
    default:
      return degree;
  }
}
// adds city to favorite list
function addCityToFavourites(object) {
  let index;
  const countFavorites = localStorage.getItem('countFavorites');

  const city = {
    id: object.id,
    city: object.name,
    coord: object.coord,
    country: object.sys.country,
  };

  if (countFavorites) {
    index = Number.parseInt(countFavorites);
    index++;

    for (let i = 1; i < index; i++) {
      const storageObject = JSON.parse(localStorage.getItem(`favorite${i}`));
      const storageCity = storageObject.city;
      if (object.name === storageCity) {
        return showNoticeCity(); //notice
      }
    }
    localStorage.setItem('countFavorites', `${index}`);
    const key = `favorite${index}`;
    localStorage.setItem(key, JSON.stringify(city));
    localStorage.setItem('currentCity', JSON.stringify(city));
    showFavourites();
  } else {
    index = 1;
    localStorage.setItem('countFavorites', `${index}`);

    const key = `favorite${index}`;
    localStorage.setItem(key, JSON.stringify(city));
    localStorage.setItem('currentCity', JSON.stringify(city));
    showFavourites();
  }
}
//  shows favorite list
function showFavourites() {
  refs.cityList.innerHTML = '';
  const countFavorites = localStorage.getItem('countFavorites');
  if (countFavorites) {
    const favoriteArr = [];
    const index = Number.parseInt(countFavorites);
    for (let i = 1; i <= index; i++) {
      const key = `favorite${i}`;
      const item = JSON.parse(localStorage.getItem(key));
      favoriteArr.push(item);
    }
    const markup = cityTpl({ ...favoriteArr });
    refs.cityList.insertAdjacentHTML('beforeend', markup);
  }
}
// shows choosen city
function chooseShowCity() {
  const currentCityLocal = localStorage.getItem('currentCity');
  const localCity = JSON.parse(currentCityLocal);

  if (localCity !== null) {
    fetchApi.city = localCity.city;
    fetchApi.fetchWeather().then(
      data => render({ data }),
      onRej => console.log(onRej),
    );
  } else {
    const currentCityLocal = localStorage.getItem(`favorite1`);
    localStorage.setItem('currentCity', currentCityLocal);
  }
}
// shows choosen category
function toggleMenu() {
  refs.formBox.classList.toggle('is-open');
  const state = refs.weatherBox.classList.contains('is-open') ? 1 : 2;
  if (refs.formBox.classList.contains('is-open')) {
    refs.weatherBox.classList.remove('is-open');
    refs.hourlyBox.classList.remove('is-open');
  } else {
    if (state === 1) {
      refs.weatherBox.classList.add('is-open');
      refs.hourlyBox.classList.remove('is-open');
    } else {
      refs.weatherBox.classList.remove('is-open');
      refs.hourlyBox.classList.add('is-open');
    }
  }
}
// cleans weatherBox
function WeatherBoxIsEmpty() {
  refs.weatherBox.innerHTML = '';
  const h2 = document.createElement('h2');
  h2.classList.add('weather-box__error');
  h2.style.fontSize = '24px';
  h2.textContent = 'Выберите город для отслеживания погоды';
  refs.weatherBox.insertAdjacentElement('beforeend', h2);
}
// deletes city from favorite list
function deleteFavoriteCity(key) {
  const index = Number.parseInt(key);
  const countFavorites = localStorage.getItem('countFavorites');
  if (index >= 0 && index <= countFavorites) {
    localStorage.removeItem(`favorite${index + 1}`);
    for (let i = index + 2; i <= countFavorites; i++) {
      let key = `favorite${i}`;
      const item = JSON.parse(localStorage.getItem(key));
      localStorage.removeItem(key);
      key = `favorite${i - 1}`;
      localStorage.setItem(key, JSON.stringify(item));
    }
    const currentCityLocal = localStorage.getItem(`favorite1`);
    localStorage.setItem('currentCity', currentCityLocal);

    localStorage.setItem('countFavorites', countFavorites - 1);
    showFavourites();
    if (localStorage.getItem('countFavorites') === '0') {
      localStorage.removeItem(`countFavorites`);
      localStorage.removeItem(`currentCity`);
      WeatherBoxIsEmpty();
    }
  }
}
// shows alert
function showAlert() {
  return alert({
    text: 'Не найден город, попробуйте еще',
    animateSpeed: 'fast',
    delay: 3000,
  });
}
// shows notice favorite list has choosen city
function showNoticeCity() {
  return notice({
    text: 'Город уже добавлен',
    animateSpeed: 'fast',
    delay: 3000,
  });
}
// shows notice cannot use your geo
function showNoticeLoc() {
  return alert({
    text: 'Нет доступа к местоположению',
    animateSpeed: 'fast',
    delay: 3000,
  });
}
// takes your geo from web
function getCurrentPosition() {
  const options = {
    timeout: 5000,
  };
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej, options);
  });
}
// renders hourly data to hourlybox
function renderHourly(data) {
  refs.hourlyList.innerHTML = '';
  const templateItem = hourlyTpl(data);
  refs.hourlyList.insertAdjacentHTML('beforeend', templateItem);
  const timeMsArr = refs.hourlyList.querySelectorAll('.js-time');
  timeMsArr.forEach(
    (item, index) => (item.textContent = convertTime(timeMsArr)[index]),
  );
  const roundPopArr = refs.hourlyList.querySelectorAll('.js-pop');
  roundPopArr.forEach(
    (item, index) => (item.textContent = roundPop(roundPopArr)[index]),
  );
  const roundTempArr = refs.hourlyList.querySelectorAll('.js-temp');
  roundTempArr.forEach(
    (item, index) => (item.textContent = roundTemp(roundTempArr)[index] + '°'),
  );
}
// rounds pop to int
function roundPop(popArr) {
  const roundPopsArr = [];
  popArr.forEach(({ textContent }) => {
    roundPopsArr.push(Number.parseFloat(textContent) * 100);
  });
  return roundPopsArr;
}
// renders daily data to dailyBox
function renderDaily(data) {
  refs.hourlyList.innerHTML = '';
  const templateItem = hourlyTpl(data);
  refs.hourlyList.insertAdjacentHTML('beforeend', templateItem);
  const timeMsArr = refs.hourlyList.querySelectorAll('.js-time');
  timeMsArr.forEach(
    (item, index) => (item.textContent = convertTime(timeMsArr)[index]),
  );
  const roundPopArr = refs.hourlyList.querySelectorAll('.js-pop');
  roundPopArr.forEach(
    (item, index) => (item.textContent = roundPop(roundPopArr)[index]),
  );
  const roundTempArr = refs.hourlyList.querySelectorAll('.js-temp');
  roundTempArr.forEach(
    (item, index) => (item.textContent = roundTemp(roundTempArr)[index] + '°'),
  );
}
