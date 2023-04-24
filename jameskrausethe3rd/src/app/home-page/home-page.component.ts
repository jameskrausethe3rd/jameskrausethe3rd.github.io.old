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
            animate('.5s 0ms cubic-bezier(.47,1.44,.41,.9)', 
            style({ transform: 'translate(0%, 0%) scale(1)',
                    opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HomePageComponent implements OnInit {
  currentTitle = "";
  section = "";
  text_summary = "";
  text_content = "";

  public items: Array<any> = [
    {
      currentTitle: "Note to Key", 
      section: "Personal Projects", 
      text_summary: `Using microphone inputs, send key strokes to the computer.`, 
      text_content: `This Python program takes your microphone input and finds the average loudest frequency. The average frequency is then used
                    to find what key is matched to that frequency and send the keypress to the computer. If all keys are setup to something like a
                    guitar, you could essentially type using your guitar.`
    },
    {
      currentTitle: "Blackjack", 
      section: "Personal Projects", 
      text_summary: "A simple black jack game.", 
      text_content: `Black Jack game made with Javascript. Cookies are used to save information about the user on the device such as amount of Wins, 
                    Losses, Money, etc. Firebase is used to display the names of all players currently on the site and if their name is clicked on, 
                    shows their current hand. Features animated card flips and modals. The user's own name is shown in yellow and they can easily change their display name. `
    },
    {
      currentTitle: "Countdown", 
      section: "Personal Projects", 
      text_summary: "Pick a date and it will tell you how long until that date.", 
      text_content: `My first Angular project. I wanted to expand my knowledge and gain some more experience in Angular after using it so much at work
                    so I can hopefully do my job better.`
    }
  ];

  ngOnInit(): void {

  }
}
