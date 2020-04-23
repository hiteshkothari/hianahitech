import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostListener('window:scroll', ['$event']) onscroll(event: Event) {
    const nav = document.getElementsByTagName('nav')[0];
    console.log(event);
    // if (event.srcElement)  // pagewindow.innerHeight
    console.log(window.pageYOffset);
    if (window.pageYOffset > 35) {
      console.log('Positionfixed');

      nav.style.position = 'sticky';
      nav.style.top = '0px';
      nav.style.zIndex = '5';
    } else {
      nav.style.position = 'relative';
      nav.style.top = '0px';
    }
  }
}
