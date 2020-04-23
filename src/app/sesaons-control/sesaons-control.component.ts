import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ISelectedThemeAndTiming, ITheme, ITiming } from '../interfaceDATA';

@Component({
  selector: 'app-sesaons-control',
  templateUrl: './sesaons-control.component.html',
  styleUrls: ['./sesaons-control.component.scss']
})
export class SesaonsControlComponent implements OnInit {

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

  constructor(@Inject(DOCUMENT) private document: Document) {
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
  ngOnInit() {

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
    // this.router.navigate([cssFile.pathUrl], { fragment });
    if (fragment) {
      setTimeout(() => {

        const animation = this.document.getElementById('animation');
        animation.scrollIntoView({ behavior: 'smooth' });
      });
    }

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
