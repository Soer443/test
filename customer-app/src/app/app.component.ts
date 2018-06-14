import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  img = 'assets/img/crystal_multi_venompool.png';
  crystalCount: number;
  diapason = [0,1,2,3,4,5,6,7,8,9,10];
  fon = 'assets/img/joel-cuellar-joel-cuellar-environment-artist-cuellar-mine-company-thumbnail.jpg/';



  show() {
    var rand = this.diapason[0] - 0.5 + Math.random() * (this.diapason[10] - this.diapason[0] + 1);
    this.crystalCount = Math.round(rand);
  }
}
