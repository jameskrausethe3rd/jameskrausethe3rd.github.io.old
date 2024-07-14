import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  jobOnePoints: string[] = [];

  ngOnInit() {
    this.jobOnePoints = [
      "Led multiple customer projects and engaged in direct communication with customers to create development and design requirements.",
      "Developed front-end utilizing Angular and TypeScript for an enhanced and accessible user experience.",
      "Applied back-end experience in Java, C#/ASP.NET , and C to create robust and scalable server-side solutions.",
      "Conducted code reviews to ensure code quality and adherence to coding standards. ",
      "Utilized GitHub for source control and managing our releases on a bi-weekly basis. ",
      "Compiled and deployed test systems, leveraging Jenkins testing pipelines to enhance code reliability. ",
      "Involved member of the AspenTech event planning committee. ",
      "Architected APIs to integrate with relational and NoSQL databases for optimized data retrieval."
    ];
  }
}
