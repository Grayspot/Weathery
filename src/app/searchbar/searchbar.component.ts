import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  nomVille = '';
  requestVille = new XMLHttpRequest();

  constructor() { }

  ngOnInit(): void {}

  rechercheVille(nom: string) {
    if (nom !== '') {
      this.nomVille = nom;
      console.log('Voici le nom de ma ville : ' + this.nomVille);
      this.requeteVille(nom);
    }
  }

  requeteVille(place: string) {
    this.requestVille.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log(response.toString());
        // console.log(response.current_condition.condition);
      }
    };
    this.requestVille.open( 'GET', 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + place + '&types=geocode&language=fr&key=AIzaSyD9K_P6cREPoxh9HHfMw7yR5gbE-vJTsnA');
    this.requestVille.send();
  }

}
