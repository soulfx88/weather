const weather = new Weather;
const form = document.getElementById('w-form');
const btnSave = document.getElementById('w-change-btn');
const ui = new UI;
const storage = new Storage;


document.addEventListener("DOMContentLoaded", LoadWeather);

function LoadWeather() {

  let defaultStorage = storage.getStorage();
  console.log(defaultStorage); 

  defaultWeather = new Weather(defaultStorage.state, defaultStorage.city);

  defaultWeather.getWeather()
  .then(results => {
    ui.showWeather(results); 
  })
  .catch(err => console.log(err));


  btnSave.addEventListener("click", function() {
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    //console.log(state,city);
     weather.setChange(city, state);
     city = '';
     state = ''; 
    });

}




