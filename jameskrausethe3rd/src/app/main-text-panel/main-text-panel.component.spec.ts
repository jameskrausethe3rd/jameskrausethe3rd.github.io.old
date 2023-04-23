import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTextPanelComponent } from './main-text-panel.component';

describe('MainTextPanelComponent', () => {
  let component: MainTextPanelComponent;
  let fixture: ComponentFixture<MainTextPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTextPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTextPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
