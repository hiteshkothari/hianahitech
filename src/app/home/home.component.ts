import { Component } from '@angular/core';
import { ITechStack } from '../interfaceDATA';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // title = 'hainahitech';
  // scroll animation to add
  // Chech Out responsive font sizess
  stackList: ITechStack[] = [
    { name: 'Angular', percentage: 50 },
    { name: 'Nest <sub>(Learning)</sub>', percentage: 20 },
    { name: 'PostgreSql (Learning)', percentage: 20 },
    { name: 'TypeORM (Learning)', percentage: 20 },
    { name: 'Nx (Learning)', percentage: 20 },
  ];
  Languagelist: ITechStack[] = [
    { name: 'HTML 5', percentage: 55 },
    { name: 'CSS', percentage: 65 },
    // { name: 'SCSS', percentage: 35 },
    { name: 'Javascript', percentage: 60 },
    { name: 'Typescript', percentage: 40 },

  ];
}
