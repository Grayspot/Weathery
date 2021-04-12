import {Component, OnInit, ViewChild} from '@angular/core';
import {WeatherComponent} from '../weather/weather.component';

const tabSound = [];
let URLmusic = '';

@Component({
  selector: 'app-music',
  template: `<div>
                <audio controls src="{{this.startMusic(this.child.getWeatherType())}}">
                <code>audio</code>
                </audio>
            </div>`,
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  @ViewChild(WeatherComponent, {static: false}) child: WeatherComponent;
  requestPlayList = new XMLHttpRequest();
  requestMusic = new XMLHttpRequest();

  constructor() { }

  ngOnInit(): void {
    this.requetePlaylist();
  }

  public requetePlaylist() {
    this.requestPlayList.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        const response = JSON.parse(this.responseText);
        // console.log(response);
        const taille = response.items.length;
        // console.log(response);
        for (let i = 0; i < taille; i++) {
          console.log(response.items[i].contentDetails.videoId);
          tabSound[i] = response.items[i].contentDetails.videoId;
        }
      }
    };
    this.requestPlayList.open('GET', 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PL1B9kgxoct2qr6qEmC3ZemusdAAvhxm6a&key=AIzaSyD9K_P6cREPoxh9HHfMw7yR5gbE-vJTsnA', false);
    this.requestPlayList.send();
  }

  public requeteMusic(id: string) {
    this.requestMusic.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        const response = JSON.stringify(this.response);
        URLmusic = response.substring(1244, 1380);
      }
    };
    this.requestMusic.open('GET', 'https://www.yt-download.org/api/button/mp3/' + id, false);
    this.requestMusic.send();
    return URLmusic;
  }

  public startMusic(weather: string) {

    if (weather === 'Thunder') {
      return this.requeteMusic(tabSound[1]);
    } else if (weather === 'Drizzle') {
      return this.requeteMusic(tabSound[5]);
    } else if (weather === 'Rain') {
      return this.requeteMusic(tabSound[0]);
    } else if (weather === 'Snow') {
      return this.requeteMusic(tabSound[2]);
    } else if (weather === 'Atmosphere') {
      return this.requeteMusic(tabSound[4]);
    } else if (weather === 'Clear') {
      return this.requeteMusic(tabSound[3]);
    } else if (weather === 'Clouds') {
      return this.requeteMusic(tabSound[3]);
    } else {
      return '../../assets/sound/Rain.mp3';
    }
  }
}
