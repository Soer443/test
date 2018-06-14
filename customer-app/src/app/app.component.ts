import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  img = '';
  crystalCount: number;
  diapason = [1,2,3];
  fon = 'assets/img/joel-cuellar-joel-cuellar-environment-artist-cuellar-mine-company-thumbnail.jpg/';



  show() {
    var rand = this.diapason[0] - 0.5 + Math.random() * (this.diapason[2] - this.diapason[0] + 1);
    this.crystalCount = Math.round(rand);
  }
  func() {
    var rand = this.diapason[0] - 0.5 + Math.random() * (this.diapason[2] - this.diapason[0] + 1);
    rand = Math.round(rand);
    if (rand == 1) {
      this.img = 'assets/img/Crystal_electro.png'
    }
    if (rand == 2) {
      this.img = 'assets/img/Crystal_blackwidow.png'
    }
    if (rand == 3) {
      this.img = 'assets/img/Crystal_generic5.png'
    }
  }
}
