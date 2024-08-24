import { Component, ElementRef, ViewChild } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-title-card',
  templateUrl: './title-card.component.html',
  styleUrl: './title-card.component.scss'
})
export class TitleCardComponent {

  constructor() { }

  @ViewChild('titlecardcomponent', { read: ElementRef }) titlecardcomponent!: ElementRef;
  @ViewChild('subtitledivcomponent', { read: ElementRef }) subtitledivcomponent!: ElementRef;

  ngAfterViewInit(): void {
    if (this.titlecardcomponent && this.titlecardcomponent.nativeElement) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateElement();
            observer.unobserve(entry.target); // Stop observing after animation starts
          }
        });
      }, { threshold: 1 }); // Trigger when 100% of the element is visible
      
      observer.observe(this.titlecardcomponent.nativeElement);
    } else {
      console.error('Title Card component element not found or is undefined.');
    }
  }

  animateElement(): void {
    anime({
      targets: this.titlecardcomponent.nativeElement,
      opacity: [0, 1],         // Fade in
      translateY: [50, 0],     // Slide up from 50px below
      easing: "easeOutQuad",
      duration: 500,           // Duration of the animation
      delay: 500
    });

    anime({
      targets: this.subtitledivcomponent.nativeElement.querySelectorAll('p'),
      opacity: [0, 1],         // Fade in
      translateY: [50, 0],
      duration: 500,           // Duration of the animation
      easing: "easeOutQuad",
      delay: anime.stagger(500, { start: 1250 })  // 1 second initial delay
    });
  }
}
