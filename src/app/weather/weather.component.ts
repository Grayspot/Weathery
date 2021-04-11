import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  WeatherData: any;
  Visibility: string;
  WeatherTypeM: string;
  constructor() { }

  ngOnInit() {
    this.Visibility = "hidden";
    this.WeatherData = {
      weather : [{}],
      main : {},
      isDay: true
    };
    // console.log(this.WeatherData);
    this.getWeatherType();
  }

  getWeatherData(city: string) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ff1bc4683fc7325e9c57e586c20cc03e')
        .then(response => response.json())
        .then(data => {this.setWeatherData(data); })

    // tslint:disable-next-line:max-line-length
    // let data = JSON.parse('{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}');
    // this.setWeatherData(data);
  }

  setWeatherData(data) {
    this.WeatherData = data;
    const sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    const currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    this.WeatherData.weatherID = (this.WeatherData.weather[0].id);
    this.WeatherData.weatherDescription = (this.WeatherData.weather[0].description);
    this.Visibility = "visible";
    this.getWeatherType();
  }

  getWeatherType(){
    let id;
    id=parseInt(this.WeatherData.weatherID = (this.WeatherData.weather[0].id));
    if(id>199 && id<233){
      this.WeatherTypeM="Thunder";
      return "Thunder";
    }else if(id>299 && id<322){
      this.WeatherTypeM="Drizzle";
      return "Drizzle";
    }else if(id>499 && id<532){
      this.WeatherTypeM="Rain";
      return "Rain";
    }else if(id>599 && id<623){
      this.WeatherTypeM="Snow";
      return "Snow";
    }else if(id>699 && id<782){
      this.WeatherTypeM="Atmosphere";
      return "Atmosphere";
    }else if(id==800){
      this.WeatherTypeM="Clouds Clear Ambience";
      return "Clear";
    }else if(id>799 && id<805){
      this.WeatherTypeM="Clouds Clear Ambience";
      return "Clouds";
    }else{
      this.WeatherTypeM="Clouds Clear Ambience";
      return "error";
      // console.log("GetWeatherType Failed.");
    }
  }
}
