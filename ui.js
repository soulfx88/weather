class UI {
  // constructor(result) {
  //   this.result = result;
  // }

  showWeather(result) {
    console.log(result);
    
    document.getElementById("w-location").innerHTML = result.display_location.full;
    document.getElementById("w-desc").innerHTML = result.weather;
    document.getElementById("w-string").innerHTML = result.dewpoint_string;
    
    let icon = document.getElementById("w-icon");
    icon.setAttribute("src", result.icon_url);

    document.getElementById("w-hmidity").innerHTML = 'Humidity: ' + result.relative_humidity;
    document.getElementById("w-dewpoint").innerHTML = result.observation_location.full + ' ' + result.observation_location.country;
    document.getElementById("w-feels-like").innerHTML = 'Feels Like: ' + result.feelslike_string;
    document.getElementById("w-wind").innerHTML = 'Wind: ' + result.wind_string;
  }
}