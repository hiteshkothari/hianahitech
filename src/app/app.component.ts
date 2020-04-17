import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
export interface ITiming {
  timingStart: string;
  timingEnd: string;
  name: string;
  imageUrl: string;
}
export interface ITheme {
  themeUrl: string;
  name: string;
  imageUrl: string;
  pathUrl: string;
}
export interface ISelectedThemeAndTiming {
  cssFile: ITheme;
  timing: ITiming;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hainahitech';
  timing: ITiming[] = [
    { timingStart: '', timingEnd: '', name: 'Morning', imageUrl: 'assets/morning_final.svg' },
    { timingStart: '', timingEnd: '', name: 'Afternoon', imageUrl: 'assets/afternoon_final.svg' },
    { timingStart: '', timingEnd: '', name: 'Evening', imageUrl: 'assets/evening_final.svg' },
    { timingStart: '', timingEnd: '', name: 'Night', imageUrl: 'assets/night_final.svg' },
  ];
  themes: ITheme[] =
    [
      { themeUrl: 'summer.css', name: 'Summer', imageUrl: 'assets/scenss/summer_final.svg', pathUrl: 'summer' },
      { themeUrl: 'monsoon.css', name: 'Monsoon', imageUrl: 'assets/scenss/monsoon_final.svg', pathUrl: 'monsoon' },
      { themeUrl: 'winter.css', name: 'Winter', imageUrl: 'assets/scenss/winter_final.svg', pathUrl: 'winter' },
    ];
  setTimeOfTheDay = new Date().getTime();
  setTheme = new Date().getMonth();

  selectedTimingAndTheme: ISelectedThemeAndTiming;
  // {
  //   cssfile: { themeUrl: 'summer.css', name: 'Summer', imageUrl: 'assets/_final.svg' },
  //   timing: { timingStart: '', timingEnd: '', name: 'Morning', imageUrl: 'assets/_final.svg' }
  // };

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {
    // check for the session storage
    console.log(this.setTimeOfTheDay);
    console.log(this.setTheme);

    if (sessionStorage.length > 0) {
      // console.log('SESsION storage present ');
      if (sessionStorage.getItem('selectedTimingAndTheme')) {
        this.selectedTimingAndTheme = JSON.parse(sessionStorage.getItem('selectedTimingAndTheme'));
        // console.log('selectedTimingAndTheme present ', this.selectedTimingAndTheme);
      }
      else {
        this.selectedTimingAndTheme = { cssFile: this.themes[0], timing: this.timing[0] };
      }
    } else {
      this.selectedTimingAndTheme = { cssFile: this.themes[0], timing: this.timing[0] };
    }
    this.loadTheme(this.selectedTimingAndTheme.cssFile);
    this.setTime(this.selectedTimingAndTheme.timing);

  }
  loadTheme(cssFile: ITheme, fragment?) { // { themeUrl: string, name: string, imageUrl: string }
    console.log('Received css File ', cssFile);

    const headEle = this.document.getElementsByTagName('head')[0];
    const existingLinkEl = this.document.getElementById('theme') as HTMLLinkElement;
    if (existingLinkEl) {
      existingLinkEl.href = cssFile.themeUrl;
    } else {
      const newLink = this.document.createElement('link');
      newLink.id = 'theme';
      newLink.rel = 'stylesheet';
      newLink.href = cssFile.themeUrl;
      headEle.appendChild(newLink);
    }
    this.selectedTimingAndTheme.cssFile = cssFile;
    this.setStoredTimings();
    //
    this.router.navigate([cssFile.pathUrl], { fragment });

  }
  setTime(timing) {
    console.log('TIming Received', timing);

    this.selectedTimingAndTheme.timing = timing;
    this.setStoredTimings();
  }
  setStoredTimings() {
    sessionStorage.setItem('selectedTimingAndTheme',
      JSON.stringify(this.selectedTimingAndTheme));
  }
}
