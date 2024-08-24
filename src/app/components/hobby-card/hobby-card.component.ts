import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-hobby-card',
  templateUrl: './hobby-card.component.html',
  styleUrls: ['./hobby-card.component.scss']
})
export class HobbyCardComponent {
  @Input() text: string = '';   // The default value is an empty string
  @Input() image: string = '';  // The default value is an empty string
}
