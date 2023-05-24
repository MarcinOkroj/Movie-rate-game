import { Component } from '@angular/core';
import { MovieCard } from '../shared/movie-card.model';

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss']
})
export class MovieCardComponent {
  movies: MovieCard[] = [
    new MovieCard('Frozen', 2011, 7.7, "https://lumiere-a.akamaihd.net/v1/images/p_frozen_18373_3131259c.jpeg?region=0%2C0%2C540%2C810"),
    new MovieCard('Big Lebowski', 2012, 7.1, "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/9a3b5acf64bce5c671be1b77408de961af7109eeca27e79417b5435b61e28a79._RI_TTW_.jpg") 
  ]
}
