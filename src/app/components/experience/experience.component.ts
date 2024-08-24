import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements AfterViewInit {
  jobOnePoints = [
    "Led multiple customer projects and engaged in direct communication with customers to create development and design requirements.",
    "Developed front-end utilizing Angular and TypeScript for an enhanced and accessible user experience.",
    "Applied back-end experience in Java, C#/ASP.NET , and C to create robust and scalable server-side solutions.",
    "Conducted code reviews to ensure code quality and adherence to coding standards. ",
    "Utilized GitHub for source control and managing our releases on a bi-weekly basis. ",
    "Compiled and deployed test systems, leveraging Jenkins testing pipelines to enhance code reliability. ",
    "Involved member of the AspenTech event planning committee. ",
    "Architected APIs to integrate with relational and NoSQL databases for optimized data retrieval."
  ];

  @ViewChild('experiencecomponent', { read: ElementRef }) experienceComponent!: ElementRef;
  // @ViewChild('.experience-item', { read: ElementRef }) experienceListItem!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    if (this.experienceComponent && this.experienceComponent.nativeElement) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateElement();
            observer.unobserve(entry.target); // Stop observing after animation starts
          }
        });
      }, { threshold: .1 }); // Trigger when 100% of the element is visible
      
      observer.observe(this.experienceComponent.nativeElement);
    } else {
      console.error('Education component element not found or is undefined.');
    }
  }

  animateElement(): void {
    anime({
      targets: this.experienceComponent.nativeElement,
      opacity: [0, 1],         // Fade in
      scale: [.9, 1],          // Scale from 90% to 100%
      easing: 'easeOutElastic(1, .5)', // Overshoot effect
      duration: 1500,           // Duration of the animation
    });

    anime({
      targets: ".experience-item",
      opacity: [0, 1],         // Fade in
      translateY: [50, 0],
      duration: 1000,           // Duration of the animation
      delay: anime.stagger(50)
    });
  }
}
