import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';
// import {SearchService} from './search.service';

const tabVille = [];
let placeId = '';
const tabPhoto = [];

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  nomVille = '';
  requestVille = new XMLHttpRequest();
  requestChoixVille = new XMLHttpRequest();
  requestPhoto = new XMLHttpRequest();
  tabVilles = [];
  placeId2: unknown = '';
  apiVilleRoot = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=';
  apiPhotoRoot = 'https://maps.googleapis.com/maps/api/place/details/json?place_id=';

  constructor() { } // private searchCity: SearchService
  ngOnInit(): void {}

  public rechercheVille(nom: string) {
    if (nom !== '') {
      this.nomVille = nom;
      console.log('Voici le nom de ma ville : ', this.nomVille);
      for (let i = 0; i < tabVille.length; i++) {
        console.log(tabVille[i]);
      }
      this.requeteChoixVille(nom);
      // this.requetePhoto(placeId);
    }
  }

  // async requeteChoixVille(nom: string) {
  //  await this.searchCity.requeteVille(nom)
  //   .then(data => {
  //    this.placeId2 = data;
  // Object.assign(this.placeId2, data);
  // });
  // console.log('PlaceID2 in Component is ', this.placeId2);
  // }

  public requeteChoixVille(nom: string) {
    if (nom !== '' && nom.length > 2) {
      this.requestChoixVille.onreadystatechange = (function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          const response = JSON.parse(this.responseText);
          // console.log(response);
          placeId = response.predictions[0].place_id;
          console.log('dans onreadystatechange : ', placeId);
        }
      }); this.requestChoixVille.open( 'GET', this.apiVilleRoot + nom + '&types=geocode&language=fr&key=AIzaSyD9K_P6cREPoxh9HHfMw7yR5gbE-vJTsnA');
      this.requestChoixVille.send();
      console.log('après onreadystatechange : ', placeId);
      return placeId;
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
      this.requestVille.open( 'GET', this.apiVilleRoot + nom + '&types=geocode&language=fr&key=AIzaSyD9K_P6cREPoxh9HHfMw7yR5gbE-vJTsnA');
      this.requestVille.send();
      this.tabVilles = tabVille;
    }
  }

  public requetePhoto(nom: string) {
    if (nom !== '') {
      this.requestPhoto.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          const response = JSON.parse(this.responseText);
          // const taille = response.predictions.length;
          console.log(response);
          // for (let i = 0; i < taille; i++) {
          // console.log(response.predictions[i].description);
          //  tabVille[i] = response.predictions[i].description;
          // }
        }
      };
      this.requestPhoto.open('GET', this.apiPhotoRoot + nom + '&key=AIzaSyD9K_P6cREPoxh9HHfMw7yR5gbE-vJTsnA');
      this.requestPhoto.send();
    }
  }


}
