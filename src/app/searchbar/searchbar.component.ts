import { Component, OnInit, ViewChild } from '@angular/core';
import {WeatherComponent} from '../weather/weather.component';

// Variables globaux qui servent d'intermédiaires pour stocker les données json des requêtes XMLHTTP
let tabVille = [];
let tabPhoto = [];
let tabURLPhoto = [];
let placeId = '';
let index = 0;
let Latitude = '';
let Longitude = '';

// Retourne une valeur comprise entre 0 et le nombre max
function randomInteger(max) {
  return Math.floor(Math.random() * max);
}

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent implements OnInit {
  // Récupère les variables et méthodes de WeatherComponent
  @ViewChild(WeatherComponent, {static: false}) child: WeatherComponent;
  loading = false;

  // Variables utilisées notamment pour la communication entre le typescript et l'HTML de ce composant
  longitude = '';
  latitude = '';
  nomVille = '';
  tabVilles = [];
  tabPhotos = [];
  nbPhotomax = 5;
  tabURLPhotos = [];

  // Requêtes XMLHTTP
  requestVille = new XMLHttpRequest();
  requestPhoto = new XMLHttpRequest();
  requestChoixVille = new XMLHttpRequest();
  requestChoixPhoto = new XMLHttpRequest();

  constructor() { }
  ngOnInit(): void {}

  // Méthode principal qui est lancée après le clique sur le bouton "Go"
  public rechercheVille(nom: string) {
    if (nom !== '') {
      // Initialisation des variables après chaque recherche
      tabVille = []
      tabPhoto = [];
      tabURLPhoto = [];
      index = 0;
      this.latitude = 'error';
      this.longitude = 'error';
      this.nomVille = nom;

      // Récupère la place_id de la ville
      this.requeteChoixVille(nom);

      // Récupère les références des photos de la ville
      this.requetePhoto();

      // Récupère les informations météorologiques grâce à la position de la ville
      this.child.getWeatherDataByCoords(this.latitude, this.longitude);

      // Stocke seulement 5 photos maximum ( 5 références de photos )
      const temp = this.tabPhotos.length;
      if (temp < this.nbPhotomax) {
        this.nbPhotomax = temp;
      }

      // Récupère les liens URL des photos
      for (let i = 0; i < this.nbPhotomax; i++) {
        this.requeteChoixPhoto();
      }

      // Filtre pour enlever les NULL dans le tableau au cas où l'API ne propose pas le nombre de photo maximum
      // Il peut par exemple donner 2 photos de la ville.
      this.tabURLPhotos = tabURLPhoto.filter(function(err) {
        return err != null;
      });
    }
  }

  // Méthode qui permet de récupérer les adresses exactes des villes
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
      this.requestVille.open( 'GET', 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + nom + '&types=geocode&language=en&key=AIzaSyD9K_P6cREPoxh9HHfMw7yR5gbE-vJTsnA', false);
      this.requestVille.send();
      this.tabVilles = tabVille;
    }
  }

  // Méthode qui permet de récupérer les références des photos, il récupère aussi la position de la ville (pour économiser le nombre de requêtes)
  public requetePhoto() {
    this.requestPhoto.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        const response = JSON.parse(this.responseText);
        const taille = response.result.photos.length;
        // console.log(response);
        Latitude = response.result.geometry.location.lat;
        Longitude = response.result.geometry.location.lng;
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
    // Filtre pour enlever les NULL dans le tableau
    this.tabPhotos = tabPhoto.filter(function(err) {
      return err != null;
    });
    this.latitude = Latitude;
    this.longitude = Longitude;
  }

  // Méthode qui permet de récupérer la place_id de la ville avec son adresse exacte
  public requeteChoixVille(nom: string) {
    if (nom !== '' && nom.length > 2) {
      this.requestChoixVille.onreadystatechange = (function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          const response = JSON.parse(this.responseText);
          // console.log(response);
          placeId = response.predictions[0].place_id;
        }});
      this.requestChoixVille.open( 'GET', 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + nom + '&types=geocode&language=en&key=AIzaSyD9K_P6cREPoxh9HHfMw7yR5gbE-vJTsnA', false);
      this.requestChoixVille.send();
    }
  }

  // Méthode qui permet de récupérer les liens URL des photos à l'aide des références photos
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

  // Méthode qui permet de mettre le background du site web
  public setBackgroundImage() {
    let indice = 1;
    if (this.tabURLPhotos.length === 0) {
      return 'assets/img/weathery/login.jpg';
    }  else {
          indice = randomInteger(2);
        }
    return this.tabURLPhotos[indice];
    }
  }
