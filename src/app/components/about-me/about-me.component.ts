import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  aboutMePoints: string[] = []

  ngOnInit() {
    this.aboutMePoints = [
      "Hi there! My name is James Krause and I'm from Shakopee, Minnesota. I currently live at home with my parents in Shakopee after graduating from Minnesota State University, Mankato and needed a place to stay while I find a new place. As of now, I share the house with my parents and our 2 cats, Narc (19) and Tasha (19).",
      "When I'm not working or hanging out with my friends, you can find me doing a few things. When I was 5, I started bowling in a junior league, and continued to bowl on a league until 2 years ago when I moved out to Mankato. I was even on my high school bowling team for 5 years. When I was 10, I began playing electric guitar, and later expanding into acoustic and bass guitar.",
      "In December of 2021, I bought my first 3D printer, the Ender 3 v2, and wow did I underestimate the time and fiddling it would take to get the first print done. Once I got it dialed in, it was amazing to see it go to work and make things that I modeled on my computer, such as a lightbox and a cable holder. I also play games on my computer, such as Forza Horizon and the newly released Spider-Man Remastered."
    ];
  }

}
