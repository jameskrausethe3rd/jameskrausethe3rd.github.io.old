import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ transform: 'translate(0%, 250%) scale(1)',
                  opacity: 0 }),
          stagger(100, [
            animate('.5s 0ms cubic-bezier(.47,1.44,.41,.9)', style({ transform: 'translate(0%, 0%) scale(1)',
                                                                      opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HomePageComponent implements OnInit{
  items = [1];

  ngOnInit(): void {
    this.showItems();
  }
  
  showItems() {
    this.items = [0,1,2,3,4];
  }
}
