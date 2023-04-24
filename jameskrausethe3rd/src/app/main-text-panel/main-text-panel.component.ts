import { Component, OnInit, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-main-text-panel',
  templateUrl: './main-text-panel.component.html',
  styleUrls: ['./main-text-panel.component.css']
})
export class MainTextPanelComponent{
  @Input() text_title!: string;
  @Input() section!: string;
  @Input() text_summary!: string;
  @Input() text_content!: string;
  
  isVisible = false;
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 100;
}
