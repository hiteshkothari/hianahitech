import { Component, OnInit } from '@angular/core';
// declare let gsap;
// declare let Draggable;
// declare let InertiaPlugin;

@Component({
  selector: 'app-make',
  templateUrl: './make.component.html',
  styleUrls: ['./make.component.scss']
})
export class MakeComponent implements OnInit {
  rotateDeg;
  coffeeRotater: HTMLElement;
  constructor() { }

  ngOnInit(): void {
    this.coffeeRotater = document.getElementById('Layer_1') as HTMLElement;
    // gsap.registerPlugin(Draggable);

    // gsap.set('#circle', { transformOrigin: '50% 50%' });


    // Draggable.create('#circle', {
    //   type: 'rotation',
    //   inertia: true
    // });

  }
  // ngAfterContentInit() {

  // }

  rotate() {
    this.rotateDeg = Math.floor(Math.random() * 360);
    this.coffeeRotater.style.transform = `rotate(${this.rotateDeg}deg)`;
  }
}
