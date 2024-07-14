
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {
  educationPoints: string[] = [];

  ngOnInit() {
    this.educationPoints = [
      "Minor in Mathematics",
      "Certificates: Networking Technologies, Information Security, and Database Technologies"
    ];
  }
}
