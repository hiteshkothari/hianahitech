import { AfterContentInit, Component, OnInit } from '@angular/core';
declare let gsap;
declare let Draggable;
declare let InertiaPlugin;

@Component({
  selector: 'app-make',
  templateUrl: './make.component.html',
  styleUrls: ['./make.component.scss']
})
export class MakeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

    gsap.registerPlugin(Draggable, InertiaPlugin);

    gsap.set('#circle', { transformOrigin: '50% 50%' })


    Draggable.create('#circle', {
      type: 'rotation',
      inertia: true
    });

  }
  // ngAfterContentInit() {

  // }
}
