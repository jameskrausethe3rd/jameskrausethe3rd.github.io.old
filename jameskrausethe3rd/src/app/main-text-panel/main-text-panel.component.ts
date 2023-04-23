import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-main-text-panel',
  templateUrl: './main-text-panel.component.html',
  styleUrls: ['./main-text-panel.component.css']
})
export class MainTextPanelComponent{
  isVisible = false;
  longText = "THIS IS THE LONG TEXT!"
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 100;
  section = "Personal Projects";
  text_title = "James Projects";
  text_summary = "This is a short summary of the project.";
  text_content = "This is the longer form text that will be used to describe the content."
}
