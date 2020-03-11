  
class Weather {
    constructor(city, state) {
      this.apiKey = 'cfbacc63fce0b6666a1839b7b0bd9390';
      this.city = city;
      this.state = state;
    }
  
    // Fetch weather from API
    async getWeather() {
      const response = await fetch(`https://api.weatherstack.com/current/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
  
      const responseData = await response.json();
  
      return responseData.current_observation;
    }
  
    // Change weather location
    changeLocation(city, state) {
      this.city = city;
      this.state = state;
    }
  }