import { Component, OnInit, ViewChild } from '@angular/core';
import {WeatherComponent} from '../weather/weather.component';

let tabVille = [];
let tabPhoto = [];
let tabURLPhoto = [];
let placeId = '';
let index = 0;

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @ViewChild(WeatherComponent, {static: false}) child: WeatherComponent;
  nomVille = '';
  tabVilles = [];
  tabPhotos = [];
  nbPhotomax = 5;
  tabURLPhotos = [];
  requestVille = new XMLHttpRequest();
  requestPhoto = new XMLHttpRequest();
  requestChoixVille = new XMLHttpRequest();
  requestChoixPhoto = new XMLHttpRequest();

  constructor() { }
  ngOnInit(): void {}

  public rechercheVille(nom: string) {
    if (nom !== '') {
      tabVille = []
      tabPhoto = [];
      tabURLPhoto = [];
      index = 0;
      this.nomVille = nom;
      this.child.getWeatherData(nom);
      // console.log('Le nom de la ville recherchée : ', this.nomVille);
      this.requeteChoixVille(nom);
      this.requetePhoto();
      // for (let j = 0; j < this.tabPhotos.length; j++) {
      //  console.log(this.tabPhotos[j]);
      // }
      const temp = this.tabPhotos.length;
      if (temp < this.nbPhotomax) {
        this.nbPhotomax = temp;
      }
      for (let i = 0; i < this.nbPhotomax; i++) {
        this.requeteChoixPhoto();
      }
      this.tabURLPhotos = tabURLPhoto.filter(function(err) {
        return err != null;
      });
      for (let j = 0; j < this.tabPhotos.length; j++) {
        console.log(this.tabURLPhotos[j]);
       }
    }
  }
  public requeteVille(nom: string) {
    if (nom !== '' && nom.length > 2) {
      this.requestVille.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          const response = JSON.parse(this.responseText);
          const taille = response.predictions.length;
          // console.log(response);
          for (let i = 0; i < taille; i++) {
            // console.log(response.predictions[i].description);
            tabVille[i] = response.predictions[i].description;
          }
        }
      };
      this.requestVille.open( 'GET', 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + nom + '&types=geocode&language=fr&key=AIzaSyD9K_P6cREPoxh9HHfMw7yR5gbE-vJTsnA', false);
      this.requestVille.send();
      this.tabVilles = tabVille;
    }
  }
  public requetePhoto() {
      this.requestPhoto.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          const response = JSON.parse(this.responseText);
          const taille = response.result.photos.length;
          // console.log(response);
          for (let i = 0; i < taille; i++) {
            // tslint:disable-next-line:max-line-length
            if (response.result.photos[i].height > 720 && response.result.photos[i].width > 1280) { // Photo en HD Ready
              // console.log(response.result.photos[i].photo_reference);
              tabPhoto[i] = response.result.photos[i].photo_reference;
            }
           }
        }
      };
      this.requestPhoto.open('GET', 'https://maps.googleapis.com/maps/api/place/details/json?place_id=' + placeId + '&key=AIzaSyD9K_P6cREPoxh9HHfMw7yR5gbE-vJTsnA', false);
      this.requestPhoto.send();
      this.tabPhotos = tabPhoto.filter(function(err) {
        return err != null;
      });
  }

  public requeteChoixVille(nom: string) {
    if (nom !== '' && nom.length > 2) {
      this.requestChoixVille.onreadystatechange = (function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          const response = JSON.parse(this.responseText);
          // console.log(response);
          placeId = response.predictions[0].place_id;
        }});
      this.requestChoixVille.open( 'GET', 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + nom + '&types=geocode&language=fr&key=AIzaSyD9K_P6cREPoxh9HHfMw7yR5gbE-vJTsnA', false);
      this.requestChoixVille.send();
    }
  }
  public requeteChoixPhoto() {
    this.requestChoixPhoto.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          // console.log(this.responseURL);
          tabURLPhoto[index] = this.responseURL;
          index++;
        }
      };
    // tslint:disable-next-line:max-line-length
      this.requestChoixPhoto.open('GET', 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=1100&photoreference=' + this.tabPhotos[index] + '&key=AIzaSyD9K_P6cREPoxh9HHfMw7yR5gbE-vJTsnA', false);
      this.requestChoixPhoto.send();
  }
  public setBackgroundImage() {
    let indice = 1;
    if (this.tabURLPhotos.length === 0) {
      return 'assets/img/weathery/login.jpg';
    } else {
        while (this.tabURLPhotos[indice] === null) {
          indice++;
          if ( indice === this.tabURLPhotos.length) {
            indice = 0;
          }
        }
      // tslint:disable-next-line:max-line-length
        return this.tabURLPhotos[indice]; // Il prend la deuxième photo, il faut ajouter un bouton pour que l'utilisateur change l'image du site
    }
  }
}
