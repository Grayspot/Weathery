import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
    // WeatherData is a structure that represents data received from weather API
    // Visibility is a variable that is used to hide Weather-Widget's div until it's "called"
    // WeatherTypeSound is a variable used in defining the background ambient sound
    WeatherData: any;
    Visibility: string;
    WeatherTypeIcon = 'http://skullbox.freeboxos.fr:27924/share/3HiVPPNkELfrKmhd/Clear.svg';
    WeatherTypeSound = 'http://skullbox.freeboxos.fr:27924/share/HweY5XEtOkz2h_iS/Weathery.mp3';

    constructor() { }

    ngOnInit() {
        this.Visibility = 'hidden';
        this.WeatherData = {
            weather : [{}],
            main : {},
            isDay: true
        };
        this.setWidgetPaths();
    }
    // Method that sends a request to the Weather API on given city name.
    getWeatherDataByCity(city: string) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ff1bc4683fc7325e9c57e586c20cc03e')
            .then(response => response.json())
            .then(data => {this.setWeatherData(data); })
    }

    // Method that sends a request to the Weather API on given coordinates.
    // tslint:disable-next-line:max-line-length
    // This method of acquiring data is more precise since there can be 2 cities with the same name, but not 2 cities with the same coordinates.
    // The only problem is that the request often returns the district name of the city instead of the city itself.
    getWeatherDataByCoords(latt: string, long: string) {
        if (long !== 'error' && latt !== 'error') {
            fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + latt + '&lon=' + long + '&appid=ff1bc4683fc7325e9c57e586c20cc03e')
                .then(response => response.json())
                .then(data => {this.setWeatherData(data); })
        } else {
            console.log('ERROR GET WEATHER DATA BY COORDS');
        }
    }

    // Method that trims and puts data received from API into a variable that will be later used by component
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
        this.Visibility = 'visible';
        this.setWidgetPaths();
    }

    // tslint:disable-next-line:max-line-length
    // A function that returns current weather type depending on the ID of the weather and time of the day in the place fetched from Weather API.
    // Used 2 times:
    // To display weather type on weather-widget.
    // To set path to the svg icon that will be displayed by weather-widget.
    setWidgetPaths() {
        let id;
        // tslint:disable-next-line:radix
        id = parseInt(this.WeatherData.weatherID = (this.WeatherData.weather[0].id));
        if (id > 199 && id < 233) {
          this.WeatherTypeSound = 'Thunder';
          this.WeatherTypeIcon = 'Thunder';
        } else if (id > 299 && id < 322) {
          this.WeatherTypeSound = 'Drizzle';
          if (this.WeatherData.isDay) {
              this.WeatherTypeIcon = 'Drizzle';
          } else {
              this.WeatherTypeIcon = 'DrizzleNight';
          }
        } else if (id > 499 && id < 532) {
          this.WeatherTypeSound = 'Rain';
          if (this.WeatherData.isDay) {
              this.WeatherTypeIcon = 'Rain';
          } else {
              this.WeatherTypeIcon = 'RainNight';
          }
        } else if (id > 599 && id < 623) {
          this.WeatherTypeSound = 'Snow';
          if (this.WeatherData.isDay) {
              this.WeatherTypeIcon = 'Snow';
          } else {
              this.WeatherTypeIcon = 'SnowNight';
          }
        } else if (id > 699 && id < 782) {
          this.WeatherTypeSound = 'Atmosphere';
          if (this.WeatherData.isDay) {
              this.WeatherTypeIcon = 'Atmosphere';
          } else {
              this.WeatherTypeIcon = 'AtmosphereNight';
          }
        } else if (id === 800) {
          this.WeatherTypeSound = 'Clouds Clear Ambience';
          if (this.WeatherData.isDay) {
              this.WeatherTypeIcon = 'Clouds';
          } else {
              this.WeatherTypeIcon = 'CloudsNight';
          }
        } else if (id > 799 && id < 805) {
          this.WeatherTypeSound = 'Clouds Clear Ambience';
          if (this.WeatherData.isDay) {
              this.WeatherTypeIcon = 'Clouds';
          } else {
              this.WeatherTypeIcon = 'CloudsNight';
          }
        } else {
          this.WeatherTypeSound = 'Weathery';
          this.WeatherTypeIcon = 'Clear';
        }
    }
}
