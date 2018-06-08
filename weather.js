class Weather {
  constructor(state,city) {
    this.key = '2d8054f03f713750';
    this.state = state;
    this.city = city;
  }

  setChange(city, state) {
    
    this.state = state;
    this.city = city;

    if(this.state != '' && this.city != '') {
    let setStorage = {
      city: city,
      state: state
    }; 

    weather.getWeather()
    .then(results => {
      ui.showWeather(results); 
    })
    .catch(err => console.log(err));

    
    
    localStorage.setItem("info", JSON.stringify(setStorage)); 

    document.getElementById('city').value = '';
    document.getElementById('state').value = '';
    document.querySelector('.close').click(); 
  } else {
    alert('Please enter City and State!');
  }
  }

  async getWeather() {
    
    const Response = await fetch(`http://api.wunderground.com/api/${this.key}/conditions/q/${this.state}/${this.city}.json`);

 
    const data = await Response.json(); 

    return data.current_observation;
    
  }
}